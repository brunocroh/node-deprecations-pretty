import type { DeprecationModule, DeprecationOutput } from "./types.ts";
import { writeFileSync } from "node:fs";
import { styleText } from "node:util";
import { md } from "mdbox";
import {
  addDeprecation,
  inferDeprecationType,
  sortDeprecations,
  sortVersionsDesc,
} from "./utils.ts";

console.log(`${styleText(["blue", "bold"], "[info]")} Fetching deprecations data...`);

const response = await fetch("https://nodejs.org/api/deprecations.json");
const json = await response.json();

const deprecationsModules: DeprecationModule[] = json.miscs[0].miscs[1].modules;

const deprecationsByVersion = new Map<string, DeprecationOutput[]>();

for (const deprecation of deprecationsModules) {
  for (const change of deprecation.meta.changes) {
    const resolvedType = inferDeprecationType(deprecation.desc, change.description);
    const versions = Array.isArray(change.version)
      ? change.version
      : [change.version];

    for (const version of versions) {
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

let markdownContent = "# Node.js Deprecations by Version\n";

markdownContent += "\nThis document lists Node.js deprecations organized by major version.\n";

const sortedVersions = sortVersionsDesc(deprecationsByVersion.keys());

for (const version of sortedVersions) {
  const deprecations = deprecationsByVersion.get(version) ?? [];
  const sortedDeprecations = sortDeprecations(deprecations);

  markdownContent += md.heading(`Node.js ${version}\n`, 2);
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

writeFileSync("deprecations.md", markdownContent);
