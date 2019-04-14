'use strict';
const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

function writeMyArray(arraycualquiera){
  for (const data of arraycualquiera){
    for (let i =0; i<data.total; i++){
      console.log(data.text);
    }
  }
}
writeMyArray(myWordList);

