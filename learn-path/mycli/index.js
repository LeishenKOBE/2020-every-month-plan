#!/usr/bin/env node
const program = require("commander");
const package = require("./package.json");

program
  .command("create <name>")
  .description("创建项目")
  .action((cmd, options) => {
    console.log(cmd, options);
  });

program
  .version(package.version)
  .option("-V,--version", "get program version")
  .parse(process.argv);
