import type { DeprecationModule, DeprecationOutput } from "./types.ts";
import { writeFile } from "node:fs/promises";
import { styleText } from "node:util";
import { md } from "mdbox";
import {
  addDeprecation,
  inferDeprecationType,
  sortDeprecations,
  sortVersionsDesc,
} from "./utils.ts";

console.log(`${styleText(["blue", "bold"], "[info]")} Fetching deprecations data...`);

const json = await fetch("https://nodejs.org/api/deprecations.json").then((res) => res.json());

const deprecationsModules: DeprecationModule[] = json.miscs[0].miscs[1].modules;

const deprecationsByVersion = new Map<string, DeprecationOutput[]>();
const latestDeprecationVersion = new Map<string, string>();

console.debug(`${styleText(["yellow", "bold"], "[debug]")} Found ${deprecationsModules.length} deprecations.`);

for (const deprecation of deprecationsModules) {
  for (const change of deprecation.meta.changes) {
    const resolvedType = inferDeprecationType(deprecation.desc, change.description);
    const versions = Array.isArray(change.version)
      ? change.version
      : [change.version];

    const version = versions[versions.length - 1];

    // if version in under v10 we don't process it
    const majorVersion = parseInt(version.replace(/^v/, "").split(".")[0]!, 10);
    if (majorVersion < 10) continue;
  

    // Track the latest version for each deprecation code
    if (!latestDeprecationVersion.has(deprecation.name) || sortVersionsDesc([latestDeprecationVersion.get(deprecation.name)!, version])[0] === version) {
      latestDeprecationVersion.set(deprecation.name, version);
    }

    // Add deprecation to the version table only if it's the latest version
    if (latestDeprecationVersion.get(deprecation.name) === version) {
      addDeprecation(deprecationsByVersion, version, {
        name: deprecation.name,
        version,
        displayName: deprecation.displayName,
        deprecationType: resolvedType,
      });
    }
  }
}

console.log(`${styleText(["green", "bold"], "[success]")} Deprecations data fetched and processed.`);
console.debug(`${styleText(["yellow", "bold"], "[debug]")} Found ${deprecationsByVersion.size} Node.js versions with deprecations.`);

let markdownContent = "# Node.js Deprecations by Version\n";

markdownContent += "\nThis document lists Node.js deprecations organized by major version.\n";

const sortedVersions = sortVersionsDesc(deprecationsByVersion.keys());

for (const version of sortedVersions) {
  const deprecations = deprecationsByVersion.get(version);
  const EofDeprecations = deprecations.filter((dep) => dep.deprecationType === "End-of-Life");
  const sortedDeprecations = sortDeprecations(deprecations);

  // Only include non-empty tables
  if (deprecations.length > 0) { 
    markdownContent += md.heading(`Node.js ${version}\n`, 2);
    markdownContent += `Total Deprecations: **${deprecations.length}**  \n`;
    markdownContent += `End-of-Life Deprecations: **${EofDeprecations.length}**\n\n`;
    markdownContent += md.table({
      columns: ["Code", "Display Name", "Version", "Deprecation Type"],
      rows: sortedDeprecations.map((dep) => [
        md.link(`https://nodejs.org/api/deprecations.html#${dep.code}`, dep.code),
        dep.displayName,
        dep.version,
        dep.deprecationType,
      ]),
    });

    markdownContent += "\n";
  }
}

await writeFile("deprecations.md", markdownContent);