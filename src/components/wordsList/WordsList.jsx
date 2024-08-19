export function WordList (){

const words = ['BEAR', 'HIPPO', 
    'DEER', 'MONKEY', 'DOG','ALLIGATOR', 
    'ELEPHANT', 'JAGUAR', 'LION', 'WOLF',
    'FOX', 'GIRAFFE', 'KANGAROO', 'OTTER',
    'PENGUIN', 'RABBIT', 'SHARK', 'TIGER', 
    'YAK', 'ZEBRA'];

 return words[Math.floor(Math.random() * words.length)];
}