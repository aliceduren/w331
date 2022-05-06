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

//madlibs & functions
function wordBlacks(noun, adj, verb, place, adverb) {
  var sentence = ''; //equals an empty string
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
  return sentence; //will be returned
}
console.log(
  wordBlacks('kitty', 'smelly', 'sprinted', 'Statue of Liberty', 'menacingly')
);
// document.querySelector("p").textContent=wordBlacks()

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
