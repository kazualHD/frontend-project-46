#!/usr/bin/env node

import { program } from 'commander';
import getObject from '../src/index.js';

program
.version('1.0.0')
.name('gendiff')
.usage('[options]')
.description('Compares two configuration files and shows a difference.')
.helpOption('-h, --help', 'output usage information')
.option('-f, --format <type>', 'output format', 'stylish')
.arguments('<filepath1> <filepath2>')
.action((filepath1, filepath2)=> {
console.log(getObject(filepath1, filepath2))
})
program.parse();
