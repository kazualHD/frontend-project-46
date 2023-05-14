#!/usr/bin/env node

import { program } from 'commander';

program
.version('1.0.0')
.name('gendiff')
.usage('[options]')
.description('Compares two configuration files and shows a difference.')
.helpOption('-h, --help', 'output usage information')
.option('-f, --format <type>', 'output format', 'stylish')
.arguments('<filepath1> <filepath2>')
program.parse(process.argv);
