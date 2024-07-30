
const myURL = new URL('https://example.com');
myURL.pathname = 'a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);
console.log(myURL.href);

// const url = require('url');

// const myURL = new URL('https://example.com');
// console.log(myURL.hostname); // Output: example.com

// console.log(myURL);
// console.log(myURL.hostname);