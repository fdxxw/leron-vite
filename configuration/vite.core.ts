import { UserConfigExport } from "vite";

const coreConfiguration: UserConfigExport = {
  build: {
    lib: {
      entry: "index.ts",
      name: "@leron-vite/core",
    },
  },
};
export { coreConfiguration };
