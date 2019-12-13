var input = require('fs').readFileSync('./1140.txt', 'utf8');
var lines = input.split('\r\n');

var tamanho;
var qtd;
var i = 0;
var tx;
while (tx != '*') {
    tx = lines[i].split(" ");
    console.log(tx[0][0]);

    qtd = tx.length;
    console.log(qtd);



    console.log('dentro');
    i++;
}
console.log('teste fim');