var input = require('fs').readFileSync('./1050.txt', 'utf8');
var lines = input.split('\r\n');


switch (parseInt(lines[0])){
    case 11:
        console.log('Sao Paulo');
        break;
    case 19:
        console.log('Campinas');
        break;
    case 21:
        console.log('Rio de Janeiro');
        break;
    case 27:
        console.log('Vitoria');
        break;
    case 31:
        console.log('Belo Horizonte');
        break;    
    case 32:
        console.log('Juiz de Fora');
        break;
    case 61:
        console.log('Brasilia');
        break;
    case 71:
        console.log('Salvador');
        break;
    default:
        console.log('DDD nao cadastrado');
}


