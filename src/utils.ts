import type { DeprecationOutput } from "./types.ts";

export type DeprecationsByVersion = Map<string, DeprecationOutput[]>;
export type DeprecationInput = Omit<DeprecationOutput, "code">;

const parseVersionParts = (version: string) => {
  return version
    .replace(/^v/, "")
    .split(".")
    .map((part) => Number.parseInt(part, 10) || 0);
};

export const compareVersionDesc = (a: string, b: string) => {
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

export const inferDeprecationType = (desc: string, changeDescription?: string) => {
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

export const addDeprecation = (
  store: DeprecationsByVersion,
  version: string,
  deprecation: DeprecationInput,
) => {
  const separatorIndex = deprecation.displayName.indexOf(":");
  const trimmedCode =
    separatorIndex === -1
      ? deprecation.displayName.trim()
      : deprecation.displayName.slice(0, separatorIndex).trim();
  const trimmedName =
    separatorIndex === -1
      ? deprecation.displayName.trim()
      : deprecation.displayName.slice(separatorIndex + 1).trim();
  const majorVersion = getVersion(version);

  if (store.has(majorVersion)) {
    store.get(majorVersion)?.push({
      ...deprecation,
      code: trimmedCode,
      displayName: trimmedName,
    });

    return;
  }

  store.set(majorVersion, [
    {
      ...deprecation,
      code: trimmedCode,
      displayName: trimmedName,
    },
  ]);
};

export const sortDeprecations = (deprecations: DeprecationOutput[]) => {
  return [...deprecations].sort((a, b) => {
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
};

export const sortVersionsDesc = (versions: Iterable<string>) => {
  return Array.from(versions).sort(compareVersionDesc);
};
