const _ = require('loadsh')

const items = [1, [2, [3, [4]]]]

const displayitems = _.flattenDeep(items);

console.log(displayitems);