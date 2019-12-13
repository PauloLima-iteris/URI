var input = require('fs').readFileSync('./1002.txt', 'utf8');
var lines = input.split('\r\n');

var n = 3.14159;
console.log("A="+((lines[0]*lines[0])*n).toFixed(4));