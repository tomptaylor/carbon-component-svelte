// this file will not afect the sandbox but will
// afect the deployment and dowload

import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { optimizeCarbonImports } from "carbon-components-svelte/preprocess";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/bundle.js"
  },
  plugins: [
    svelte({
      dev: !production,
      css: (css) => {
        css.write("public/bundle.css");
      },
      preprocess: [optimizeCarbonImports()]
    }),

    resolve(),
    commonjs(),
    production && terser()
  ]
};
