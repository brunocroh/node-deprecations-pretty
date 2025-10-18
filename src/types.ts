export type DeprecationType =
  | "Documentation-only"
  | "Application" // non-node_modules code only
  | "Runtime" // all code
  | "End-of-Life"
  | "Compile-time"
  | "Deprecation revoked";

export type DeprecationChange = {
  version: string | string[];
  "pr-url": string;
  description: string;
};

export type DeprecationOutput = {
  name: string;
  version: string;
  displayName: string;
  code: string;
  deprecationType: string;
};

export type DeprecationModule = {
  textRaw: string;
  name: string;
  meta: {
    changes: DeprecationChange[];
  };
  desc: string;
  type: string;
  displayName: string;
};
