import {resolve} from "path";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  root: resolve("examples"),
  build: {
    outDir: resolve("build")
  }
};
