let x = 20 % 6;
document.write(x);

console.log('I hate myself');
var number = 5;
/* Data Types:
undefined, null (nothing), boolean (true or false), 
symbl(idk), object (key values)

variable can be filled with ANY data
var is WHOLE program, let is temporary, const is eternal
*/
var myName = 'Alice';
document.write(myName);
document.write('gege');
const pi = Math.PI;
console.log(pi);

var a;
var b = 2;
a = 7;
b = a;
console.log(b);
var a = 5.4522;
var b = 10.243;
var c = 'Mr. Krabs';
c = c + 5;
console.log(c);
a *= b;
console.log(a);
var Str = 'I\'m a "double quoted" string.   '; //esc character
var Stri = 'I can do this too \n\tSecond line\nThrid line yes';
document.write(Str);
document.write(Stri);
var ourStr = "\nI'm first ";
ourStr += "and I'm next.";
document.write(ourStr);

var aName = Math.round(Math.random() * 100);
var str = 'Hello! My name is ' + aName + '. Nice to meet you!';
console.log(str);
var ths = aName + ': ' + str;
console.log(ths);

var anAdj = 'crapp!';
var straw = 'My life is ';
straw += anAdj;
len = straw.length;
console.log(straw);
console.log(len);

var firstLetter = '';
var firstName = 'Supercalifragilisticexpialidocious';
var firstLetter = firstName[firstName.length - 1]; //js counts from 0, so we need 1
console.log(firstLetter); //STRINGS CANNOT BE CHANGED

//madlibs & functions;
function wordBlacks(noun, adj, verb, place, adverb) {
  var sentence = '';
  sentence +=
    'The ' +
    adj +
    ' ' +
    noun +
    ' ' +
    verb +
    ' to the ' +
    place +
    ' ' +
    adverb +
    '.';
  return sentence;
}
console.log(
  wordBlacks('kitty', 'smelly', 'sprinted', 'Statue of Liberty', 'menacingly')
);
document.querySelector('p').textContent = wordBlacks();

function idk(num, num2, num3) {
  var adding;
  adding = num * num2 + num3;
  return adding;
}
console.log(idk(100, 2, 3));
//think i got it . . . sorta
function herro(string, string2) {
  var name = '';
  name = string + string2;
  return name;
}
console.log(herro('I wanna die ', 'today!!'));

function justDo() {
  var thIs = 9;
  var numBer = 4;
  var newImg = numBer + thIs;
  return newImg;
}
console.log(justDo());

function FartoCel(far) {
  cel = ((far - 32) * 5) / 9;
  return cel;
}
console.log(FartoCel(86));

//this example takes 2 seconds to run
const start = Date.now();

m = Date.now();
console.log(m / 10000);

var hmmm = [1, 'Elizabeth', ['Duren', 'alice', [23, [4, ['Hy', [42]]]]]];
// declare variable, then identify variable.
//Then you add in an element in the array. Can be ANY data type, string, number, more arryas (nested array), floating numbers and idk.
console.log(hmmm[2][2][1][1][1]);
let activities = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', 1],
  ['Sleep', 7],
];

activities[4][0] = 'hey';
activities.push(['Have Sweet Dreams', 3]);
let noact = activities.shift(); //.pop removes the last, shift removes the first
console.log(activities);
console.log(noact); //noact now has the last/first element of the original array that we pushed
activities.unshift(['Ha ha! First!', 5]);
console.log(activities);
let running = 5;
let whyrurunning = 6;
running += whyrurunning;
console.log(running);
function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5));
var sum = 0;
function addThree() {
  sum += 3;
}
function addFive() {
  sum += 5;
}
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log('before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));
function Boooo() {
  return true;
}
console.log(Boooo());
function ToF(truofal) {
  if (truofal) {
    return 'ye sure';
  }
  return 'no way';
}
function OToF(wataboutit) {
  if (wataboutit) {
    return 'Ye';
  }
  return 'no';
}
console.log(ToF(true));
console.log(OToF(false)); /*true and false don't exactly have
 say "True" and "False", it just means that something is
ere or not.*/
function testx() {
  if ((activities[0][1] = 'no')) {
    return 4;
  }
  return 3;
}
// let text = '';
// text += activities[0] + '<br>';
// text += activities[1] + '<br>';
// text += activities[2] + '<br>';
// text += activities[3] + '<br>';
// text += activities[4] + '<br>';
// text += activities[5] + '<br>';
// document.querySelector('.try1').innerHTML = text;
//ORRRR
let textnew = '';
for (let i = 0; i < activities.length; i++) {
  textnew += activities[i] + '<br>';
}
document.querySelector('.try2').innerHTML = textnew;
// same thing,easier set up

var anthonerarray = [];
var i = 0;
while (i < 10) {
  anthonerarray.push(' ', i);
  i++;
}
console.log(anthonerarray);

var thisnewarray = [];

for (let i = 96; i <= 100; i++) {
  thisnewarray.push(i);
}

console.log(thisnewarray);
// program to display numbers from 1 to 5
const straaa = 'apple';

const result = straaa.split('').join(' ');
console.log(result);

var arrayAgainYay = ['History', 'Math', 'English', 'Algebra', 'Chemistry'];

let TYnext = '';
for (let index = 0; index < arrayAgainYay.length; index++) {
  TYnext += arrayAgainYay[index] + `! I like ${arrayAgainYay[index]}.` + '<br>';
}
console.log(arrayAgainYay);
document.querySelector('.try3').innerHTML = TYnext;

var thisObject = { Alice: 'first name' };
// let apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//     const meAls = jsObject['meals'][0];
//     document.querySelector('.tester').textContent =
//       meAls.strArea + ' ' + meAls.strCategory;
//     console.log(jsObject['meals'][0].idMeal);
//   });
