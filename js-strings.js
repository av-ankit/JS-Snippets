const myString = "aabcbdeak";

//function to get characters which appear in the string once
const getUniqueChar = (str) => {
  let uniqueChar = "";
  for (let i = 0; i < str.length; i++)
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) 
        uniqueChar += str[i];
  console.log(uniqueChar); //output: cdek
};

getUniqueChar(myString);


//function to get each character once from the string
const getCharOnce = (str) => {
  let newString = "";
  for (let i = 0; i < str.length; i++)
    if (newString.indexOf(str[i]) === -1) 
        newString += str[i];
  console.log(newString); //output: abcdek
};

getCharOnce(myString);


//function to get count of each character in a string
const countChar = (str) => {
  let countObj = {};
  for (let i = 0; i < str.length; i++) {
    if (countObj[str[i]]) 
      countObj[str[i]]++;
    else 
      countObj[str[i]] = 1;
  }
  console.log(countObj);
};

countChar(myString);


//-----------------------------------------------------
//create functionality to capitalize each first letter of a string
//eg: "jai shree krishn"  --> "Jai Shree Krishn"

const str = "jai shree krishn";

//approach with split() & map() function
let cap = str
  .split(" ")
  .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1))
  .join(" ");

console.log(cap);

//approach with for loop
let result = "";

for (let i = 0; i < str.length; i++) {
  if (i == 0 || str[i - 1] === " ") result += str[i].toUpperCase();
  else result += str[i];
}

console.log(result);


