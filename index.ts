import type { DeprecationModule, DeprecationOutput } from "./types.js";
import { md } from "mdbox";
import { writeFileSync } from "node:fs";

const result = await fetch("https://nodejs.org/api/deprecations.json");
const response = new Response(result.body);
const json = await response.json();

const deprecationsModules: DeprecationModule[] = json.miscs[0].miscs[1].modules;

const deprecationsByVersion = new Map<string, DeprecationOutput[]>();

const getVersion = (version: string) => {
  return version.split(".")[0]!;
};

function addDeprecation(version: string, deprecation: DeprecationOutput) {
  const [code, name]: [string, string] = deprecation.displayName.split(":") as [
    string,
    string,
  ];
  const _version = getVersion(version);
  if (deprecationsByVersion.has(_version)) {
    deprecationsByVersion.get(_version)?.push({
      ...deprecation,
      code,
      displayName: name,
    });
  } else {
    deprecationsByVersion.set(_version, [
      {
        ...deprecation,
        code,
        displayName: name,
      },
    ]);
  }
}

for (const deprecation of deprecationsModules) {
  for (const change of deprecation.meta.changes) {
    if (Array.isArray(change.version)) {
      for (const version of change.version) {
        addDeprecation(version, {
          name: deprecation.name,
          version: version,
          displayName: deprecation.displayName,
          deprecationType: change.description,
          url: change,
        });
      }
    } else {
      addDeprecation(change.version, {
        name: deprecation.name,
        version: change.version,
        displayName: deprecation.displayName,
        deprecationType: change.description,
      });
    }
  }
}

let markdownContent = "# Node.js Deprecations by Version\n\n";

const sortedVersions = Array.from(deprecationsByVersion.keys()).sort((a, b) => {
  const numA = parseInt(a.replace("v", ""));
  const numB = parseInt(b.replace("v", ""));
  return numB - numA;
});

for (const version of sortedVersions) {
  const deprecations = deprecationsByVersion.get(version);

  markdownContent += md.heading(`Node.js ${version}`, 2);
  markdownContent += md.table({
    columns: ["Code", "Display Name", "Version", "Deprecation Type"],
    rows: deprecations!.map((dep) => [
      md.link(`https://nodejs.org/api/deprecations.html#${dep.code}`, dep.code),
      dep.displayName,
      dep.version,
      dep.deprecationType,
    ]),
  });

  markdownContent += "\n";
}

writeFileSync("deprecations.md", markdownContent);
