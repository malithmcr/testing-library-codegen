#!/usr/bin/env node
import chalk from 'chalk';
import { program } from 'commander';

import test from './cli/test.js';
console.log(chalk.blue.bgRed.bold('!!!!!! Creating a Test File !!!!!'));
program.command('test <name>').description('Generate A test').action(test);
console.log(chalk.blue.bgRed.bold('!!!!!! Test file created !!!!!'));
program.parse(process.argv);
