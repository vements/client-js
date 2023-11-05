import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import json from "@rollup/plugin-json";


export default [
    {
        input: "src/index.js",
        output: {
            name: "vements",
            file: pkg.browser,
            format: "umd",
        },
        plugins: [
            resolve(),
            commonjs(),
            json(),
            babel({
                exclude: ["node_modules/**"],
            }),
        ],
    },
    {
        input: "src/index.js",
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "es" },
        ],
        plugins: [
            babel({
                exclude: ["node_modules/**"],
            }),
        ],
    },
];