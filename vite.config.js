import {resolve} from "path";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  build: {
    lib: {
      entry: resolve("library/Switch.jsx"),
      name: "@aminnairi/switch",
    },
    outDir: "build"
  }
};
