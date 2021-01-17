#!/usr/bin/env node
const rollup = require("rollup");
const path = require("path");
// Add type script support to rollup
const rollupTypescript = require("@rollup/plugin-typescript");

const currentWorkingPath = process.cwd();
const { main, name } = require(path.join(currentWorkingPath, "package.json"));

const inputPath = path.join(currentWorkingPath, main);

// Little workaround to get package name without scope
const fileName = name.replace("@devk/", "");

// see below for details on the options
const inputOptions = {
  input: inputPath,
  plugins: [
    rollupTypescript({
      tsconfig: "../../tsconfig.json",
      typescript: require("typescript"),
      tslib: require("tslib"),
      // useTsconfigDeclarationDir: false,
    }),
  ],
};

const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: "cjs",
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: "esm",
  },
];

async function build() {
  // create bundle
  console.log(inputPath, "Input Path");
  const bundle = await rollup.rollup(inputOptions).catch((error) => {
    console.log("InputOptions", inputOptions);
    console.log(error);
  });
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options).catch((error) => {
      console.log("Options", options);
      console.error("Errors in output", error);
    });
  });
}

build();
