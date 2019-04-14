'use strict';
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  getRandomNumber(10);
  const result = getRandomNumber(10);
  console.log(result);

function ten (word,cantidad){
    for (let i = 0; i < cantidad; i++) {
       console.log (word);
      }
}
ten('patata',10);
ten('Aguacate',8);
ten('Pizza',5);