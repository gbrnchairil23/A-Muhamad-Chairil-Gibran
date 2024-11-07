//string
let name = "Gibran";
console.log(name);
alert(
    `Hello, ${name}.`
);


//boolean
let haveAccount = true;
console.log("Successfully Logged In", haveAccount);

let nothaveAccount = false;
console.log("Unable to Log in", nothaveAccount);

//number
let number = 23;
alert(number);

//array
let student = ["Joy", "Irene", "Seulgi", "Wendy"]
console.log(student)
student.push("Yeri");

//Object
const person = {
    name: ("Ning Ning"),
    birthDay: ("October 23, 2002"),
    group: ("aespa"),
    RealName: ("Ning Yizhuo"),
  };
  console.log(person.RealName + " or " + person.name + " is member of " + person.group);
  console.log(person.name + " was born on " + person.birthDay);
  