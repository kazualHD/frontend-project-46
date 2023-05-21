import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const getObject = (file1, file2) => {
   // eslint-disable-next-line no-undef
  const absolutePath1 = path.resolve(process.cwd(), file1);
   // eslint-disable-next-line no-undef
  const absolutePath2 = path.resolve(process.cwd(), file2);

  const data1 = JSON.parse(fs.readFileSync(absolutePath1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(absolutePath2, 'utf-8'));

  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const differences = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${differences.join('\n')}\n}`;
};

export default getObject;
