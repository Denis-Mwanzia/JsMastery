// Strings are sequences of characters that are used to represent a text
// Declaration - using double quotes, single quotes or templete literal

let userName = 'Denis Mwanzia'; // Double quotes
let greeting = 'Hello!'; //Single quotes
let fulGreeting = `${greeting} ${userName}`; //Templete literal
console.log(`${fulGreeting}\nData type - ${typeof fulGreeting}`);

//String Concatenation - Mean combining strings together
/*
  1. Using + operator
  2. using concat() method
  3. Using templete literal
 */
let firstName = 'Denis';
let lastName = 'Mwanzia';

// + Operator
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// concat() method
let fullName1 = firstName.concat(' ', lastName);
console.log(fullName1);

// Templete literal
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

// Append - Mean adding content to existing string
/*
  1. Using += operator
  2. using concat() method
 */
// += operator
let language = 'Java';
language += 'Script';
console.log(language);

// concat()
let message = 'JavaScript';
message = message.concat(' is ', 'awesome!');
console.log(message);

// Length - returns number of characters in a string
console.log(`Number of characters in "${message}" - ${message.length}`);

//Case - changing case of string (toUpperCase and toLowerCase)
console.log(`${message} to uppercase - ${message.toUpperCase()}`);
console.log(`${message} to lowercase - ${message.toLowerCase()}`);

// Slice - slice() extract a portion of a string and return it as new string
/*
  slice(startIndex, endIndex)
  startIndex - inclusive
  endIndex - exclusive
 */
let text = 'Hello, World!';

console.log(text);
console.log(`${text} slice(0,5) - ${text.slice(0, 5)}`);
console.log(`${text} slice(4,-1) - ${text.slice(4, -1)}`);

// Split and Join
/*
  split() - splits a string into array substrings based on specific separator
  split(separator, limit)
  separator - character or pattern to split the string
  limit - optional. Maxmum number of splits
 */

let fruit = 'Bananas, Apples, Mangoes, Oranges';
console.log(fruit.split(','));

/*
  join() - joins elements of an array in to a string
 */
let arr = ['Hello', 'Denis!'];
textMessage = arr.join(', ');
console.log(textMessage);

//Includes - checks whether the string contains a specific substring. returns True or False
let languages = ['Python', 'Java', 'JavaScript', 'Ruby'];
languages = languages.join(' ');
console.log(`languages - ${languages}`);
console.log(`English in languages - ${languages.includes('english')}`);
console.log(`Python in languages - ${languages.includes('Python')}`);

// Trim - removes whitespaces from begining and end of a string
let txt = ' Hello, Denis! ';
console.log(txt);
console.log(txt.trim());
