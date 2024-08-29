import nodeResolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import commonjs from "@rollup/plugin-commonjs";

const consoleShimScript = "var console = new Proxy({}, { get: () => () => void 0 });"

export default {
    input: 'index.js',
    output: {
        file: 'dist.js',
        format: 'iife',
        compact: true,
        intro: "var window = globalThis, self = globalThis, console = new Proxy({}, { get: () => () => void 0 });"
    },
  plugins: [
        nodeResolve(),
        commonjs(),
        esbuild({ minify: true })
    ]
};
