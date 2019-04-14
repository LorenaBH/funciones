'use strict';

const aleatory1 = getRandomNumber(10);
const aleatory2 = getRandomNumber(10);
const aleatory3 = getRandomNumber(10);

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
ten('patata', aleatory1);
ten('Aguacate',aleatory2);
ten('Pizza',aleatory3);