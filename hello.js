'use strict';

var s = 'Hello';

function greet(name){
    console.log(s+','+name+'!');
}

function amberai(){
    console.log("we are amber team!")
}

function quant(name){
    console.log(name+" is a quant reseacher");
}



module.exports = {
    amberai:amberai
    ,quant:quant
    ,greet:greet};
