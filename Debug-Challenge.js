// 1
num.toPrecision(500.2345)
//Range error

//2
var x;
x = y + 1;
// Reference error


//4
string.toUpperCase();
// Type error


//3
let horse = {
  name: 1,
  height: 160,
  weight: 780
};
horse.height = 0;
// Syntax Error

//5
let person;
person.eatsASandwhich()
// Syntax Error


// Run this lastt one in your browser's console
//6
eval("alert('Hello')");
// URL Error

const peoplesNames = ["Dan", "Kathy", "Monika", "Carl"]

let shortNames = [];
let longNames = [];
for (i = 0; i < peoplesNames.length; i++) {
    if (peoplesNames[i].length < 4) {
	shortNames.push(peoplesNames[i])
  } else {
	longNames.push(peoplesNames[i])
    }
}
console.log(shortNames);
console.log(longNames);
