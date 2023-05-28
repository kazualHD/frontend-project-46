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



  //console.log(stylish([{"key":"common","status":"nested","children":[{"key":"follow","status":"added","value":false},{"key":"setting1","status":"unmodified","value":"Value 1"},{"key":"setting2","status":"removed","value":200},{"key":"setting3","status":"updated","previous":true,"current":null},{"key":"setting4","status":"added","value":"blah blah"},{"key":"setting5","status":"added","value":{"key5":"value5"}},{"key":"setting6","status":"nested","children":[{"key":"doge","status":"nested","children":[{"key":"wow","status":"updated","previous":"","current":"so much"}]},{"key":"key","status":"unmodified","value":"value"},{"key":"ops","status":"added","value":"vops"}]}]},{"key":"group1","status":"nested","children":[{"key":"baz","status":"updated","previous":"bas","current":"bars"},{"key":"foo","status":"unmodified","value":"bar"},{"key":"nest","status":"updated","previous":{"key":"value"},"current":"str"}]},{"key":"group2","status":"removed","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","status":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]))