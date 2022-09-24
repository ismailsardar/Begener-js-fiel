window.addEventListener('offline', () => {
    alert('your are offline!');
});
window.addEventListener('online', () => {
    alert('your are online!');
});
let changeImg = document.getElementById('changImg');

function smailImg () {
    changeImg.src='./is.jpg';
}
function mudeImg () {
    changeImg.src='./ism2.png';
}
document.write(5 + 6);

// window.alert('I am javaScript');

function prient () {
    window.print();
}


// callback function
let ul = document.querySelector('.person');
const people = ['Fatama', 'kamayl', 'Yasin', 'Halema'];
let html = ``;

people.forEach(function(person) {
  html += `<li style="color: green">${person}</li>`;
});

ul.innerHTML = html;

const letter = ['a', 's', 'w', 'r', 'e', 'a', 's', 'w', 'e'];
const count = {};
count['w'];
letter.forEach(item => {
    if(count[item]){
        count[item] += 1;
    }else{
        count[item] = 1;
    }
});
console.log(count);
console.log(count.a);

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

cars.sort((a, b)=>{
    let x  = a.type.toLowerCase();
    let y  = b.type.toLowerCase();
    if(x > y){
        return 1;
    }else{
        return -1;
    }
    return 0;
});  

console.log(cars);

const fruits86 = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits86.keys();
const keys = fruits86.entries();
console.log(keys);

convetar



function convetar(){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    const factor = 0.621371;
    // let miles = input * factor;
    let miles = Math.round(input * factor);
    output.innerText = `${miles} Mailes.`;
}

calsies to frienhight

function cltofr(){
    let clis = document.getElementById('calcis').value;
    let fran = document.getElementById('fire');

    const convert = (clis * 1.8) + 32;
    fran.innerText = `${clis} C = ${convert} F`;
}

Number type

function nuconv(){
    let take = document.getElementById('inputNu').value;
    let result = document.getElementById('number');
    
    if(take > 0){
        resuly = `${take} is Positive Number`;
     }else if(take < 0){
        resuly = `${take} is Negative Number`;
     }else if(take == 0){
        resuly = `${take} is Zero`;
     }else{
        resuly = `${take} is not a Number`;
     }
    result.innerHTML = resuly;
}

prime number


let num = prompt('enter a Number');
if(num == 1){
  console.log(`${num} is Naiter Prime nor composit Number`);
}else if(num < 1){
    console.log(`${num} is not Prime Number`);
}else{
  let result;
  for(let i = 2; i < num; i++){
    
    if(num%i == 0){
     result = `${num} is not Prime Number`;
      break;
    }else{
      result = `${num} is a Prime Number`;
    }
  }
  console.log(result);
}

factroial

let numbe = prompt('Enter a number');
let fact = 1;

if(numbe == 0){
  console.log(`That Number ${numbe} Factroial is 1`);
}else if(numbe < 0){
  console.log(`That Number ${numbe} Factroial is not posibal`);
}else{
  for(let i=1; i <= numbe; i++){
    fact *= i;
  }
  console.log(`That Number ${numbe} Factroial is ${fact}`);
}

function factr(n){
  if(n > numbe){
    return;
  }
  fact *= n;
  n++;
  factr(n);
}
factr(1)
console.log(`this ${numbe} Number factorial is ${fact}`);


table stacter

console.log(numbers + ' input');
function multfly(){
  let numbers = document.querySelector('#input').value;
  let output = document.getElementById('output');
  // console.log(numbers + ' input');
  for(let i = 1; i <= 10; i++){
    let result = numbers * i;
    let myre = (`${numbers} x ${i} = ${result}`);
    // output.innerHTML = `${numbers} x ${i} = ${result}`;
    output.innerText = myre;
  }
}

Armostang number

let number = prompt('Please enter a number');

let tem = number;
let nolent = number.toString().length;
let sum = 0;
while(tem > 0){
  let disit= tem%10;

  sum += disit**nolent;
  tem = parseInt(tem/10);
}
if(sum == number){
  console.log(`${number} is an Armostant Number.`);
}else{
  console.log(`${number} is not a Armostant Number.`);
}

Armostang number Secound Methoud

let a = prompt('please Enter lower number!')
let b = prompt('please Enter uper number!')
for(let i = a; i<=b; i++){
  let temp = i;
  let nofDisit = i.toString().length;
  let sum = 0;
  while(temp > 0){
    let disit = temp%10;
    temp = parseInt(temp/10);
    sum += disit ** nofDisit;
  }
  if(sum == i){
    console.log(i);
  }
}



Last Number is same

let number1 = prompt('Enter 1st Number');
let number2 = prompt('Enter 2ed Number');
let number3 = prompt('Enter 3rd Number');

let a = number1%10;
let b = number2%10;
let c = number3%10;

if(a===b && a===c){
  console.log(`${number1}, ${number2}, ${number3} are having same Last Disite.`);
}else{
  console.log(`${number1}, ${number2}, ${number3} are Not having same Last Disite.`);
}

Plaindrom Number

let string = prompt('Enter a World!');
let stringSplit = string.split('');
console.log(stringSplit);
let stringrevag = stringSplit.reverse('');
console.log(stringrevag);
let stringjoin = stringrevag.join('');
console.log(stringjoin);

if(string === stringjoin){
  console.log(`${string}: is a Palinderom Word `)
}else{
  console.log(`${string}: is Not a Palinderom Word `)
}

let string = prompt('Enter A world!');
let len = string.length;
let mass = 'It is a palindrome world';
for(let i=0; i < len/2; i++){
  if(string[i] != string[len - 1 - i]){
    mass = 'It is not a palindrome world';
  }
  // console.log(`${string}: ${mass}`);
}
console.log(`${string}: ${mass}`);

count lettatr how meney letter are in ther 

let world = prompt('Enter a world');
let lettet = prompt('Chouch your Letter');

let worldLent = world.length;
// console.log(worldLent);
let count = 0;
for(let i = 0; i < worldLent; i++){
  if(world[i] == lettet){
    count++;
  }
}
console.log(`${world} => ${lettet} => ${count}`);

chack ward start and end lettet

let string = prompt('Ender A World ?');
let lete1 = prompt('First letet');
let lete2 = prompt('Last letet');
let test1 = string.startsWith(lete1);
let test2 = string.endsWith(lete2);

if(test1 == true && test2 == true){
  console.log(`${string} first ${lete1} and Last ${lete2}`);
}else{
  console.log(`${string} There is No Match....!!!`)
}

chack include and indexof

let string = prompt('Enter your sentens.');
let incl = 'the';

let test1 = string.includes(incl);
console.log(test1);

let test2 = string.indexOf(incl);
console.log(test2);

let world = prompt('Enter a world');
console.log(world);

let firls = world.charAt(0);
console.log(firls);

let upcass = firls.toUpperCase();
console.log(upcass);

let slce = world.slice(1);
console.log(slce);

let conct = `Final: ${upcass}${slce}`;
console.log(conct);

Regular Exprison

let world = prompt('Enter a World');
let reg = /[aeiou]/gi;

let chars = world.match(reg);
let chale = chars.length;
let chajo = chars.join(',');
console.log(`${chajo} => ${chale}`);

Natural number

function sum(num){
  if(num > 0){
    return num + sum(num - 1);
  }else{
    return num;
  }
}

let res = sum(8);
console.log(res);

Factrioal Number

let number = prompt('enter a Number!');
for(let i = 1; i <= number; i++){
  if(number%i == 0){
    console.log(i);
  }
}

simpol calcluater

let num1 = prompt('Enter 1st Number?');
let num2 = prompt('Enter 2ed Number?');
let opater = prompt("Enter any Opator like'+,-,/,*'");

let result;
switch(opater){
  case '+':
    result = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} + ${num2} = ${result}`);
    break;
  case '-':
    result = parseFloat(num1) - parseFloat(num2);
    console.log(`${num1} - ${num2} = ${result}`);
    break;
  case '*':
    result = parseFloat(num1) * parseFloat(num2);
    console.log(`${num1} x ${num2} = ${result}`);
    break;
  case '/':
    result = parseFloat(num1) / parseFloat(num2);
    console.log(`${num1} / ${num2} = ${result}`);
    break;
  default:
    console.log('Invalet Oprator!');  
}

Fibonacci serise

let febo = prompt('Enter Your Recour Number!')
let a = 0, b = 1;
console.log(a);
console.log(b);
for(let i = 0; i <= febo; i++){
  let temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}


string Reples

let strin = "I have white car and white home.";
console.log(strin);

let reg = new RegExp('white', 'gi');
let reples = strin.replace(reg, 'black');
console.log(reples);

string Revars with loop

let string = prompt('Enter A Word!');
let strLen = string.length;

let rever = '';
for(let i = strLen-1; i >= 0; i--){
  rever += string[i];
}

console.log(`${string} Revars => ${rever}`);

assanding order

let sentence = prompt('Enter A sentence!');
console.log(sentence);
let senArr = sentence.split(' ');
senArr.sort()
console.log(senArr);
console.log(senArr.join(' '));

let x = prompt('Enter your Number');
let r = Math.sqrt(x);
console.log(r);

let bass = prompt('Base size');
let height = prompt('Height size');
let area = (bass * height) / 2;
console.log(area);
console.log('Base: ' +bass+ ' Height: ' + height+ ' Area: '+area);

let a = 10;
let b = 10;
let c = 10;
let s = (a+b+c) / 2;
let temp = s*(s-a)*(s-b)*(s-c);
let area = Math.sqrt(temp);
console.log(area);

let a = 12;
let b = 8;
console.log(`First value is: ${a} \n Secound value is: ${b}`);

let temp;
temp = a;
a = b;
b = temp;
console.log(`After suffe\n First value is: ${a} \n Secound value is: ${b}`);

random number

let ran = Math.random();
ran *= (100 - 1) + 1;
console.log(Math.floor(ran));

even and odd number

let x = prompt();
if(x%2 == 0){
  console.log(`${x} is an Even Number`);
}else{
  console.log(`${x} is an Odd Number`);
}

let numd = x%2 == 0 ? 'Even' : 'Odd';

console.log(`${x} is an ${numd} Number`);

prime Number

let num = prompt('enter a Number');
if(num == 1){
  console.log(`${num} is Naiter Prime nor composit Number`);
}else if(num < 1){
    console.log(`${num} is not Prime Number`);
}else{
  let result;
  for(let i = 2; i < num; i++){
    
    if(num%i == 0){
     result = `${num} is not Prime Number`;
      break;
    }else{
      result = `${num} is a Prime Number`;
    }
  }
  console.log(result);
}


max number

let a = prompt('First Number');
let b = prompt('Secound Number');
let c = prompt('Third Number');

let x = Math.max(a,b,c);
console.log(`${a}, ${b}, ${c} = Largest Number is : ${x}`);

largest number

let a = prompt('First Number');
let b = prompt('Secound Number');
let c = prompt('Third Number');

function chack(p,q,r){
  if(p>q && p>r){
    return p;
  }else if(q>p && q>r){
    return q;
  }else{
    return r;
  }
}

let x = chack(a,b,c);
console.log(`${a}, ${b}, ${c} = Largest Number is : ${x}`);
