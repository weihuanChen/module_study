'use static';
let binary = require('./unrecursion');
let arr = [1,2,3,5,8,41,10,11,35,85];
let result = binary.un_binary_search(arr,10);
console.log(result);
let sort_quick = binary.quick_sort(arr);
console.log(sort_quick);