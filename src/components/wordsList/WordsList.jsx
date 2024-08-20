export function WordList (){

const words = ['BEAR', 'HIPPO', 'FOX', 'GIRAFFE',
    'KANGAROO', 'OTTER', 'YAK', 'ZEBRA',
    'PENGUIN', 'RABBIT', 'SHARK', 'TIGER',
    'DEER', 'MONKEY', 'DOG','ALLIGATOR', 
    'ELEPHANT', 'JAGUAR', 'LION', 'WOLF'];
const randomWord = Math.floor(Math.random() * words.length);

return words[randomWord];
}