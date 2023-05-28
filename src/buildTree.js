import _ from 'lodash';

const getDiff = (obj1, obj2 ) => {
  const union = _.union(Object.keys(obj1), Object.keys(obj2));
  const sorted = _.sortBy(union);
   return sorted.map((key)=> {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, type: 'nested', children: getDiff(obj1[key], obj2[key]) };
    }
    if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
      return {
        key,
        type: 'updated',
        previous: obj1[key],
        current: obj2[key],
      };
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { key, type: 'added', value: obj2[key] };
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return { key, type: 'removed', value: obj1[key] };
    }
    return { key, type: 'unmodified', value: obj1[key] };
  });

}
export default getDiff
