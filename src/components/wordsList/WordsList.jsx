export function WordList (){

const words = ['BEAR', 'HIPPO', 'DEER', 'MONKEY', 'DOG'];

 return words[Math.floor(Math.random() * words.length)];
}