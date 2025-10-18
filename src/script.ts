import type { DeprecationModule, DeprecationOutput } from "./types.js";
import { md } from "mdbox";
import { writeFileSync } from "node:fs";

const response = await fetch("https://nodejs.org/api/deprecations.json");
const json = await response.json();

const deprecationsModules: DeprecationModule[] = json.miscs[0].miscs[1].modules;

const deprecationsByVersion = new Map<string, DeprecationOutput[]>();

type DeprecationInput = Omit<DeprecationOutput, "code">;

const parseVersionParts = (version: string) => {
  return version
    .replace(/^v/, "")
    .split(".")
    .map((part) => Number.parseInt(part, 10) || 0);
};

const compareVersionDesc = (a: string, b: string) => {
  const aParts = parseVersionParts(a);
  const bParts = parseVersionParts(b);
  const maxLength = Math.max(aParts.length, bParts.length);

  for (let index = 0; index < maxLength; index += 1) {
    const aPart = aParts[index] ?? 0;
    const bPart = bParts[index] ?? 0;

    if (aPart > bPart) {
      return -1;
    }

    if (aPart < bPart) {
      return 1;
    }
  }

  return 0;
};

const canonicalizeDeprecationType = (raw?: string) => {
  if (!raw) {
    return undefined;
  }

  const trimmed = raw.trim();
  const normalized = trimmed.toLowerCase();

  if (normalized.includes("end-of-life")) {
    return "End-of-Life";
  }

  if (normalized.includes("runtime")) {
    return "Runtime";
  }

  if (normalized.includes("documentation-only")) {
    return "Documentation-only";
  }

  if (normalized.includes("compile-time")) {
    return "Compile-time";
  }

  if (normalized.includes("application")) {
    return "Application";
  }

  if (normalized.includes("deprecation revoked") || normalized.includes("status changed to \"legacy\"")) {
    return "Deprecation revoked";
  }

  return trimmed.replace(/\.$/, "");
};

const extractTypeFromDescription = (description: string) => {
  const match = description.match(/<p>Type:\s*([^<]+)<\/p>/i);
  return match?.[1]?.trim();
};

const inferDeprecationType = (desc: string, changeDescription?: string) => {
  const typeFromDesc = canonicalizeDeprecationType(extractTypeFromDescription(desc));

  if (typeFromDesc) {
    return typeFromDesc;
  }

  const typeFromChange = canonicalizeDeprecationType(changeDescription);

  if (typeFromChange) {
    return typeFromChange;
  }

  return changeDescription?.replace(/\.$/, "").trim() ?? "Unspecified";
};

const getTypePriority = (type: string) => {
  return type.toLowerCase().includes("end-of-life") ? 0 : 1;
};

const getVersion = (version: string) => {
  return version.split(".")[0]!;
};

function addDeprecation(version: string, deprecation: DeprecationInput) {
  const separatorIndex = deprecation.displayName.indexOf(":");
  const trimmedCode =
    separatorIndex === -1
      ? deprecation.displayName.trim()
      : deprecation.displayName.slice(0, separatorIndex).trim();
  const trimmedName =
    separatorIndex === -1
      ? deprecation.displayName.trim()
      : deprecation.displayName.slice(separatorIndex + 1).trim();
  const _version = getVersion(version);
  if (deprecationsByVersion.has(_version)) {
    deprecationsByVersion.get(_version)?.push({
      ...deprecation,
      code: trimmedCode,
      displayName: trimmedName,
    });
  } else {
    deprecationsByVersion.set(_version, [
      {
        ...deprecation,
        code: trimmedCode,
        displayName: trimmedName,
      },
    ]);
  }
}

for (const deprecation of deprecationsModules) {
  for (const change of deprecation.meta.changes) {
    const resolvedType = inferDeprecationType(deprecation.desc, change.description);
    const versions = Array.isArray(change.version)
      ? change.version
      : [change.version];

    for (const version of versions) {
      addDeprecation(version, {
        name: deprecation.name,
        version,
        displayName: deprecation.displayName,
        deprecationType: resolvedType,
      });
    }
  }
}

let markdownContent = "# Node.js Deprecations by Version\n\n";

const sortedVersions = Array.from(deprecationsByVersion.keys()).sort((a, b) => {
  return compareVersionDesc(a, b);
});

for (const version of sortedVersions) {
  const deprecations = deprecationsByVersion.get(version) ?? [];
  const sortedDeprecations = [...deprecations].sort((a, b) => {
    const typeOrder = getTypePriority(a.deprecationType) - getTypePriority(b.deprecationType);

    if (typeOrder !== 0) {
      return typeOrder;
    }

    const versionOrder = compareVersionDesc(a.version, b.version);

    if (versionOrder !== 0) {
      return versionOrder;
    }

    const typeNameOrder = a.deprecationType.localeCompare(b.deprecationType);

    if (typeNameOrder !== 0) {
      return typeNameOrder;
    }

    const displayNameOrder = a.displayName.localeCompare(b.displayName);

    if (displayNameOrder !== 0) {
      return displayNameOrder;
    }

    return a.code.localeCompare(b.code);
  });

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
