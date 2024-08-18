export function WordList (){

const words = ['BEAR', 'HIPPO', 'DEER', 'MONKEY', 'DOG','ALLIGATOR', 'ELEPHANT', 'JAGUAR', 'LION', 'WOLF'];

 return words[Math.floor(Math.random() * words.length)];
}