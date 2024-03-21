import nodeResolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'index.js',
    output: {
        file: 'dist.js',
        format: 'iife',
        compact: true,
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        esbuild({ minify: true })
    ]
};