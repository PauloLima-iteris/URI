var input = require('fs').readFileSync('./1074.txt', 'utf8');
var lines = input.split('\r\n');

var sinal;
var n = lines.shift();
var num = lines;

for (let i = 0; i < n; i++) {
    if (num[i] % 2 == 0) {
        var par = 'EVEN';
        if (num[i] > 0) {
            sinal = 'POSITIVE';
            console.log(par + " " + sinal);
        }
        else if (num[i] < 0) {
            sinal = 'NEGATIVE';
            console.log(par + " " + sinal);
        }
        else if (num[i] == 0) {
            console.log('NULL');
        }
    }

    else {
        var impar = 'ODD';
        if (num[i] > 0) {
            sinal = 'POSITIVE';
            console.log(impar + " " + sinal);
        }
        else if (num[i] < 0) {
            sinal = 'NEGATIVE';
            console.log(impar + " " + sinal);
        }
    }
}