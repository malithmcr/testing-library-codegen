#!/usr/bin/env node
import chalk from 'chalk';
import { program } from 'commander';

// program
//   .option('--first')
//   .option('-s, --separator <char>');

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));
console.log(chalk.blue.bgRed.bold('Hello world!'));
