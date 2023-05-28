import path from 'path';
import parse from './parsers.js';
import getDiff from './buildTree.js';
import toFormat from './formatters/index.js';

// eslint-disable-next-line no-undef
const getAbsPath = (filePath) => path.resolve(process.cwd(), filePath);
const getExtname = (filepath) => path.extname(filepath);

export default (filePath1, filePath2, format = 'stylish') => {
  const path1 = getAbsPath(filePath1);
  const path2 = getAbsPath(filePath2);
  const extname1 = getExtname(path1);
  const extname2 = getExtname(path2);
  const data1 = parse(path1, extname1);
  const data2 = parse(path2, extname2);
  const diffTree = getDiff(data1, data2);
  return toFormat(diffTree, format);
};