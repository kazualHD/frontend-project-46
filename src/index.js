import _ from 'lodash'
import fs from 'fs';
import path from 'path';

const getObject = (file1, file2) => {
  

  const filePath1 = path.isAbsolute(file1) ? file1 : path.resolve(process.cwd(), file1);
  const filePath2 = path.isAbsolute(file2) ? file2 : path.resolve(process.cwd(), file2);

  const data1 = JSON.parse(fs.readFileSync(filePath1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(filePath2, 'utf-8'));
  
  const objectUnion = _.union(Object.keys(data1), Object.keys(data2));
  
  const getDifference = objectUnion.map((key) => {
    if (!_.has(data1, key)) {
      return `- ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `+ ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `- ${key}: ${data2[key]}\n+ ${key}: ${data1[key]}`;
    } else { 
      return `  ${key}: ${data1[key]}`;
    }
  });
  
  const sortedDifference = getDifference.sort((a, b) => {
    const aKey = a.slice(2);
    const bKey = b.slice(2);
    return aKey < bKey ? -1 : aKey > bKey ? 1 : 0;
  });
  
  return `{\n${sortedDifference.join('\n')}\n}`;
};
export default  getObject
//inxex