//This is javascript basic
/*
let js = 'awesome';
console.log(js);
console.log(7-11+19*2+3);
let firstName = 'Imran';
let lastName = 'Hossain';
console.log(firstName + ' ' + lastName + ' is a developer. '  +  firstName + ' studying in DPI');
let v$name=11;
let country = 'Bangaldesh';
let population = 160;
let isIsland = true;
let  PI = 3.1416;
console.log(PI);
console.log(country);
console.log(typeof(population));
console.log(typeof(isIsland));
let firstN = 'Imran';
let lastN = 'Imu';
console.log( firstN + ' ' + lastN + ' is a good boy.');

/////second class******

let age = 30;
age = 31;
console.log(age);
const birthYear = 1990;
//birthYear =1994;
console.log(birthYear);
let myName;
//const yourName;
var mySubject = 'CSE';
console.log(mySubject);

myName = 'Imran';
console.log(myName);

const now = 2021;

const imranAge = now-1993;
const imuAge = now-2005;
console.log(imranAge,imuAge);


console.log(imranAge*2,imranAge/10,2**3);

const firstName = 'Imran';
const lastName = 'Imu';
console.log(firstName+ ' '+lastName);

//assignment operator...
let x = 7+11;
x += 3  //x=x+3;
x -= 4;  //x=x-4;
x++; //x=x+1;
x--; //x=x-1;
x--;//x=x-1;
console.log(x);

//comparison operators...
console.log(imranAge>imuAge);
console.log(imuAge>=18);*/

/*homework practise
const country = 'Bangladesh';
const continent = 'Asia';
let population = 160;
console.log(country, continent, population);

const isIsland = true;
const language = 'Bangla';
console.log(isIsland);
console.log(typeof(isIsland), typeof(population), typeof(country), typeof(language));
population = 180;
const firstHalf = population/2;
const secondHalf = population/2;
console.log(firstHalf,secondHalf);
console.log(++population);
let finPopulatin = 6;
console.log(population > finPopulatin);
let averagePopulation = 33;
console.log(population < averagePopulation);

let description = country + ' ' + 'is in ' + continent + ',and ' + 'its ' + population + ' million' + ' people speack ' + language + '.';

console.log(description);*/

/*

//operator precedence 

const now = 2037;
const ageJons = now - 1992;
const ageSara = now - 1998;
const average = (ageJons + ageSara) / 2;
/*
console.log(now - 1992 > now - 1998);
const x = y = 25 - 10 + 5;
console.log(y);
console.log(ageJons,ageSara,average);

//test DATA 1

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / ( heightMark * heightMark);
const bmiJohn = massJohn / ( heightJohn * heightJohn);

const markHigherbmi = bmiMark > bmiJohn;

console.log(bmiMark,bmiJohn,markHigherbmi);



//test DATA 2
const massMarks = 95;
const massJohns = 85;
const heightMarks = 1.88;
const heightJohns = 1.76;

const bmiMarks = massMarks / ( heightMarks * heightMarks);
const bmiJohns = massJohns / ( heightJohns * heightJohns);

const markHigherbmis = bmiMarks > bmiJohns;

console.log(bmiMarks,bmiJohns,markHigherbmis);

// Strings & Template Literals..


const firstName = 'Jonus';
const job = 'teacher';
const birthYear = 1993;
const currentYear = 2037;
// I am Jonus, a 30 years old teacher!
const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job +'!';


const jonasNew = `I'am ${firstName},a ${currentYear - birthYear} years old ${job}!`;


console.log(jonasNew);
console.log(jonas);
console.log('I am a\n\multiline\n\string');
  console.log(`I am a 
  multiline 
  string...`);   */


//   practise

/*
const firstName = 'Imran';
const lastName = 'Hossain';
const topicName = 'JavaScript';
const institute = 'NBICT-LAB';
const startYear = 2016;
const endYear = 2021;

const firstResult = 'I am '+ firstName +' ' + lastName + '. ' + 'I am \n\ learning ' + topicName + ' ' + 'at ' + ' ' + institute + ' ' + 'for\n\ '+ (endYear - startYear) + ' years'+ '!';

const secondResult = `I am ${firstName} ${lastName},
 I am learning ${topicName} 
 at ${institute} for ${
    endYear - startYear
} years!`;



console.log( firstResult);
console.log( secondResult);

const myName = 'Lubona';
const lastName = 'Shaima';
console.log(myName);

*/
const country = 'Bangladesh';
let population = 160;
const continent = 'Asia';

console.log(country , population , continent);

const isIsland = true;
const language = 'Bangla';


console.log(`type of 'country' 
is ${typeof(country)} `);

console.log(`type of 'population' 
is ${typeof(population)} `);

console.log(`type of 'continent' 
is ${typeof(continent)} `);

console.log(`type of 'isIsland' 
is ${typeof(isIsland)} `);

console.log(`type of 'language' 
is ${typeof(language)} `);


let firstHalf = population / 2;
let secondHalf = population - firstHalf ;

console.log(`Each half will contain ${secondHalf} million people.`);

let newPop = population + 1;

console.log(`If we add 1 to ${population} then we will get ${newPop}`);

let finPopulation = 180; 

let condition = population > finPopulation;

if(condition){ 
  console.log(`Our population is greater than finland's population.`);
}else{
  console.log(`Our population is less than finland's population`);
}

let averagePopulation = 33;

let condition1 = population > averagePopulation;

if(condition1){
  console.log(`Our  population is greather than average population`);
}else{
  console.log(`Our population is less than average population`);
}

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}.`);