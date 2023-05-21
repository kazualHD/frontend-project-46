import { test, expect } from '@jest/globals';
import getObject from '../src/index.js'; 
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');

  
  const expected = readFile('expectedJson.txt');

  test(`formatter  json-json files`, () => {
    const actual = getObject(json1, json2 );
    expect(actual).toEqual(expected);
  });
  