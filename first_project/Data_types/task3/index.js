let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

let initialValue1;
let initialValue2 = 0;

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';

let help = ageOfPerson1;
ageOfPerson1 = ageOfPerson2;
ageOfPerson2 = help;
console.log('ageOfPerson1: ', ageOfPerson1, typeof ageOfPerson1);
console.log('ageOfPerson2: ', ageOfPerson2, typeof ageOfPerson2);


help = nameOfAnimal1;
nameOfAnimal1 = nameOfAnimal2;
nameOfAnimal2 = help;
console.log('nameOfAnimal1: ', nameOfAnimal1, typeof nameOfAnimal1);
console.log('nameOfAnimal2: ', nameOfAnimal2, typeof nameOfAnimal2);

console.log('Переменную с const переопределить нельзя')
console.log('bestProgrammingLanguage1: ', bestProgrammingLanguage1, typeof bestProgrammingLanguage1);
console.log('bestProgrammingLanguage2: ', bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

initialValue1 = initialValue2;
initialValue2 = null;
console.log('initialValue1: ', initialValue1, typeof initialValue1);
console.log('initialValue2: ', initialValue2, typeof initialValue2);

console.log('var является устаревшим');
help = isJavaScriptProgrammer1;
isJavaScriptProgrammer1 = isJavaScriptProgrammer2;
isJavaScriptProgrammer2 = help;
console.log('isJavaScriptProgrammer1: ', isJavaScriptProgrammer1, typeof isJavaScriptProgrammer1);
console.log('isJavaScriptProgrammer2: ', isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2);


help = helloText1;
helloText1 = helloText2;
helloText2 = help;
console.log('helloText1: ', helloText1, typeof helloText1);
console.log('helloText2: ', helloText2, typeof helloText2);





