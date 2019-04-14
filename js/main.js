'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  console.log(result);

function ten (word,cantidad){
    for (let i = 0; i < cantidad; i++) {
       console.log (word);
      }
}
ten('patata',getRandomNumber(10) );
ten('Aguacate',getRandomNumber(10));
ten('Pizza',getRandomNumber(10));

