const stylish = (diffTree) => {
  const generateIndent = (depth) => '    '.repeat(depth);

  const stringifyValue = (value, depth) => {
    if (typeof value === 'object' && value !== null) {
      const indent = generateIndent(depth + 1);
      const innerLines = Object.entries(value).map(([key, val]) => `${indent}${key}: ${stringifyValue(val, depth + 1)}`);
      return `{\n${innerLines.join('\n')}\n${generateIndent(depth)}}`;
    }
    return value;
  };

  const iter = (tree, depth) => {
    const indent = generateIndent(depth);
    const lines = tree.map((node) => {
      const { key, type, value, previous, current, children } = node;
      const stringValue = stringifyValue(value, depth + 1);
      const previousValue = stringifyValue(previous, depth + 1);
      const currentValue = stringifyValue(current, depth + 1);

      switch (type) {
        case 'removed':
          return `${indent}  - ${key}: ${stringValue}`;
        case 'added':
          return `${indent}  + ${key}: ${stringValue}`;
        case 'updated':
          return `${indent}  - ${key}: ${previousValue}\n${indent}  + ${key}: ${currentValue}`;
        case 'nested':
          return `${indent}    ${key}: ${iter(children, depth + 1)}`;
        default:
          return `${indent}    ${key}: ${stringValue}`;
      }
    });
    return `{\n${lines.join('\n')}\n${generateIndent(depth)}}`;
  };

return iter(diffTree, 0);
};

export default stylish;