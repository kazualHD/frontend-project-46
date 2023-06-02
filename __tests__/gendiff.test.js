import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import getObject from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const getActual = (filename1, filename2, format) => {
  const path1 = getFixturePath(filename1);
  const path2 = getFixturePath(filename2);
  return getObject(path1, path2, format);
};

const cases = [
  {
    file1: 'file1.json',
    file2: 'file2.json',
    exp: 'expectedJson.txt',
    format: 'stylish',
  },
  {
    file1: 'file3.json',
    file2: 'file4.json',
    exp: 'expectedChildren.txt',
    format: 'stylish',
  },
  {
    file1: 'file3.json',
    file2: 'file4.json',
    exp: 'expectedYml.txt',
    format: 'plain',
  },
  {
    file1: 'file5.yml',
    file2: 'file6.yml',
    exp: 'expectedJson.txt',
    format: 'stylish',
  },
  {
    file1: 'file7.yml',
    file2: 'file8.yml',
    exp: 'builtTree.txt',
    format: 'json',
  },
];

test.each(cases)(
  'getObject should return the expected output for %p',
  ({
    file1, file2, exp, format,
  }) => {
    const actual = getActual(file1, file2, format);
    const expected = readFile(exp);
    expect(actual).toBe(expected);
  },
);
