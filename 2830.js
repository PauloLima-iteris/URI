var input = require('fs').readFileSync('./2830.txt', 'utf8');
var lines = input.split('\r\n');


var num = lines;

if(num[0] >= 1 && num[0] <= 8){              
    if(num[0] >= 1 && num[0] <= 4){          
        if(num[0] >= 1 && num[0] <= 2){ 
            if(num[0] == 1){
                console.log('1');
            }else{
                console.log('2');
            }
        }else{
            if(num[0] >= 3 && num[0] <= 4){
                if(num[0] == 3){
                    console.log('3');
                }else{
                    console.log('4');
                }
            }
        }
    }else{
        if(num[0] >= 5 && num[0] <= 8){
            if(num[0] >= 5 && num[0] <= 6){
                if(num[0] == 5){
                    console.log('5');
                }else{
                    console.log('6');
                }
            }else{
                if(num[0] >= 7 && num[0] <= 8){
                    if(num[0] == 7){
                        console.log('7');
                    }else{
                        console.log('8');
                    }
                }
            }
        }
    }
}else{                                   
    if(num[0] >= 9 && num[0] <= 12){
        if(num[0] >= 9 && num[0] <= 10){
            if(num[0] == 9){
                console.log('9');
            }else{
                console.log('10');
            }
        }else{
            if(num[0] >= 11 && num[0] <= 12){
                if(num[0] == 11){
                    console.log('11');
                }else{
                    console.log('12');
                }
            }
        }
    }else{
        if(num[0] >= 13 && num[0] <= 16){
            if(num[0] >= 13 && num[0] <= 14){
                if(num[0] == 13){
                    console.log('13');
                }else{
                    console.log('14');
                }
            
            }else{
                if(num[0] >= 15 && num[0] <= 16){
                    if(num[0] == 15){
                        console.log('15');
                    }else{
                        console.log('16');
                    }
                }
            }
        }
    }
}

