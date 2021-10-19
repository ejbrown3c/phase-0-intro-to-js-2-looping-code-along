
//const gifts = ["teddy bear", "drone", "doll"];

const { interfaces } = require("mocha");

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  //}

  //return gifts;
//}

//wrapGifts(gifts);

let newArr = [];

function writeCards (names, event){
  for (let i = 0; i <names.length; i++){
    newArr.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return newArr
}


function countdown(int) {
  let int = 11
  while (int > 0) {
    console.log(int);
    int--
  }
}
