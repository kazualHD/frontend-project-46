import stylish from './stylish.js';
import plain from './plain.js';

export default (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(diffTree);
    case 'plain':
      return plain(diffTree);
    case 'json':
    case 'JSON':
      return JSON.stringify(diffTree);
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};
