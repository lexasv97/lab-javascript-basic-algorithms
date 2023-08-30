// Iteration 1: Names and Input

const hacker1 = "Aleksei";

console.log(`The driver's name is ${hacker1} `);

let hacker2 = "Mortimel";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let char = "";
for (let i=0;i < hacker1.length;i++) {
  char += hacker1[i].toUpperCase() + " ";
}
console.log(char);

let reverseChar = ""
for(let i = hacker2.length-1; i >= 0; i--){
  reverseChar += hacker2[i]
}
console.log(reverseChar);

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1 === hacker2){
    console.log(`What?! You both have the same name?`);
    break
  }
  else if (hacker1[i].localeCompare(hacker2[i]) === -1){
    console.log(`The driver's name goes first.`);
    break
  }
  else if (hacker1[i].localeCompare(hacker2[i]) === 1){
    console.log(`Yo, the navigator goes first, definitely.`);
    break
  }
}

//Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu faucibus erat. Donec fringilla, lorem sit amet malesuada fringilla, eros eros condimentum sem, sit amet convallis purus nisi fringilla purus. Praesent ipsum nulla, rutrum nec massa vel, pretium venenatis justo. Aliquam bibendum finibus rhoncus. Cras orci orci, mattis sed tristique at, tincidunt sit amet erat. In vel turpis lacus. Donec eros tortor, tincidunt faucibus nulla et, ultricies elementum felis. Phasellus sit amet pretium nibh. Aliquam nec scelerisque velit. Sed consequat magna vel dapibus luctus. Nunc volutpat quis purus eget luctus. Fusce convallis neque molestie nulla iaculis, ac commodo eros interdum. Nulla facilisi. Nam mattis tortor id commodo gravida. Nunc tempus vulputate nulla vel vehicula. Suspendisse sed neque nec lorem luctus ultrices. Fusce venenatis felis lobortis, ornare dui vel, feugiat leo. Etiam feugiat ex justo, id lobortis massa semper sed. Aenean justo augue, posuere nec ultrices eu, rutrum hendrerit diam. Curabitur eget malesuada lectus, et volutpat lorem. Vestibulum faucibus efficitur quam mattis maximus. Ut iaculis tristique ornare. Maecenas imperdiet, lectus eget cursus cursus, justo neque aliquam nisl, id facilisis purus tellus quis arcu. Suspendisse ultricies non augue vitae pretium. Duis ac sodales nisi, id consequat purus. Aliquam blandit lacus id risus commodo bibendum. Phasellus diam metus, egestas sed leo sit amet, aliquet rhoncus tortor. Suspendisse lectus metus, auctor id elit egestas, vehicula sollicitudin orci. Nunc non neque at magna bibendum egestas. Etiam ipsum orci, ornare id dapibus in, aliquam vel lacus. Curabitur rutrum turpis non cursus porta. Aenean est eros, condimentum ut augue et, congue iaculis magna.`

let numberOfWords = longText.split(" "); // array of words
console.log(numberOfWords.length);

let countEt = 0;

// let countEt2 = longText.split(' ').filter((element) => element === 'et').length
// console.log(countEt2)

for (let i = 0; i < numberOfWords.length; i++){
  if (numberOfWords[i] === "et" || numberOfWords[i] === "et,"){
    countEt += 1;
  }
}
console.log(countEt);

//Bonus 2
let phraseToCheck = `"No 'x' in Nixon"`;
let phraseToCheckFormatted = "";
let possiblePalindrome = "";

//const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

for (let i = 0; i < phraseToCheck.length ; i++) {
  if (phraseToCheck[i] === "," || phraseToCheck[i] === " " || phraseToCheck[i] === "!"|| phraseToCheck[i] === "?"|| phraseToCheck[i] === `'`|| phraseToCheck[i] === `.`|| phraseToCheck[i] === `"`){
    continue;
  }
  phraseToCheckFormatted += phraseToCheck[i].toUpperCase();
}

for (let i= phraseToCheck.length-1; i >= 0; i--) {
  if (phraseToCheck[i] === "," || phraseToCheck[i] === " "|| phraseToCheck[i] === "!"|| phraseToCheck[i] === "?"|| phraseToCheck[i] === `'`|| phraseToCheck[i] === `.`|| phraseToCheck[i] === `"`){
    continue;
  }
  possiblePalindrome += phraseToCheck[i].toUpperCase();
}

console.log(possiblePalindrome, phraseToCheckFormatted, phraseToCheck);

if (phraseToCheckFormatted === possiblePalindrome){
  console.log("it's Palindrome");
}
else {
  console.log("it's not Palidrome");
}

/*
let wordArray = [""]
for (let i = 0; i < longText.length; i++){
  if (longText[i] !== " "){
    wordArray[wordArray.length-1] += longText[i];
  }
  else {
    wordArray.push("");
  }
}

console.log(wordArray)
if (wordArray === numberOfWords){
  console.log("success");
} */