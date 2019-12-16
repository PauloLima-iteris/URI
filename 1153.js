var input = require('fs').readFileSync('./1153.txt', 'utf8');
var lines = input.split('\r\n');

var num = parseInt(lines);

function fat(num){
    if(num == 0) return 1;
    return num * fat(num - 1);
}
console.log(fat(num));