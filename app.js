// // **** Asssignment No # 01 *****
// // ********** Alerts ************

// // Question No # 01
// alert("Welcome User ! Good Morning");

// // Question No # 02
// alert("Error! Please a Enter a valid Password");

// // Question No # 03
// alert("Welcome to js Land \nHappy Coding! ");

// // Question No # 04
// alert("Welcome to js Land");
// alert("Happy Coding! ");

// // Question No # 05
// console.log(alert("Hello I can rus JS through my web browser's console"));

// // ******** Variables *********

// // Question No # 01
// var username;

// // Question No # 02
// var myName = "Moiz Ali";

// // Question No # 03
// var message;
// message = "Moiz Ali";
// alert(message);

// // Question No # 04
// var name = "Moiz Ali";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// // Question No # 05
// var trickyName = "PIZZA \nPIZZ\nPIZ\nPIZ\nPI\nP";
// alert(trickyName);

// // Question No # 06
// var email = "moizali5590@gmail.com";
// alert("My email address is " + email);

// // Question No # 07
// var book = "A smarter way to learn Javascript";
// alert("I am trying to learn from the book " + book);

// // Question No # 08
// document.write("Yah! I can write HTML Content through Javascript");

// // ****Asssignment No # 02*****
// // ******** Variables For Numbers *********

// // Question No # 01
// var age = 15;
// alert("I am" + age + "years old");

// // Question No # 02
// var vistedNumers = 0;
// alert("You have Visited" + vistedNumers++ + "times");

// // Question No # 03
// var birth = 1999;
// document.write("\n My Birth year is" + birth);
// document.write("\nData Type of my decleared variable is " + typeof birth);

// // Question No # 04
// var visitorName = "Moiz Ali";
// var productTitle = "T-shirts";
// var quantity = 5;
// document.write(
//   visitorName + "Ordered" + quantity + productTitle + "on GulAhmed Store"
// );

// // ******** Legal or Illegal *********

// // Question No # 01
// var age, place, things;

// // Question No # 02
// var age, place, things, name, animal;
// // var .age, 2place, \things, na me, an""imal;

// // Question No # 03
// document.write("<h1>Rules For naming JS variables</h2>\n\n");
// document.write(
//   "Variable names can only contain, numbers, $ and _ For example: $my_1stVariable"
// );
// document.write(
//   "Variable must begin with a letter, S or _ . For example: Sname, _name or name"
// );

// document.write("Variable names are case sensitive");
// document.write("Variable names should not be JS keywords");

// // ******** Math Operations *********

// // Question No # 01
// var num1 = 2;
// var num2 = 2;
// var sum = num1 + num2;
// document.write("sum of" + num1 + "and" + num2 + "is" + sum);

// // Question No # 02
// var subtraction = num1 - num2;
// document.write("subtraction of" + num1 + "and" + num2 + "is" + subtraction);
// var multiplicaiton = num1 * num2;
// document.write(
//   "multiplicaiton of" + num1 + "and" + num2 + "is" + multiplicaiton
// );
// var division = num1 / num2;
// document.write("division of" + num1 + "and" + num2 + "is" + division);
// var remainder = num1 % num2;
// document.write("Remainder" + num1 + "and" + num2 + "is" + remainder);

// ****Asssignment No # 03*****
// ******** USER INPUT & CONDITIONAL STATEMENT *********

// Question No # 01
// var cityName = prompt("Enter City Name!");
// if (cityName === "karachi") alert("Welcome to city of lights");

// // Question No # 02
// var gender = prompt("Enter your Gender!");
// if (gender === "male") alert("Good Morning Sir!");
// else if (gender === "female") alert("Good Morning Ma'am!");
// else alert("Enter Correct Gender");

// // Question No # 03
// var signal = prompt("Enter Traffic Signal");
// if (signal === "red") alert("Must Stop!");
// else if (signal === "yellow") alert("Ready to Move!");
// else if (signal === "green") alert("Move Now!");
// else alert("Enter Correct Signal");

// // Question No # 04
// var petrol = +prompt("Enter Fuel!");
// if (petrol <= 0.25) alert("Please refill the fuel in your car");

// // Question No # 05
// var a = 4;
// if (++a === 5) alert("given condition for variable a is true");

// // Question No # 06
// var b = 82;
// if (b++ === 83) alert("given condition for variable b is true");

// // Question No # 07
// var c = 12;
// if (c++ === 13) alert("condition 1 is true");
// if (c === 13) alert("condition 2 is true");
// if (++c < 14) alert("condition 3 is true");
// if (c === 14) alert("condition 4 is true");

// // Question No # 08
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) alert("The cost equals");

// // Question No # 09
// if (true) alert("True");
// if (false) alert("False");

// // Question No # 10
// if ("car" < "cat") alert("car is smaller than cat");

// ****Asssignment No # 17*****
// // Question No # 1

// let value = (a, b) => {
//   return Math.pow(a, b);
// };

// console.log(value(5, 2));

// // Question No # 2
// let value = prompt("Enter Year");

// let years = (value) => {
//   if (Number(value) % 4 === 0) {
//     console.log("Leap Year");
//   } else {
//     console.log("Not Leap year");
//   }
// };
// years(value);

// // Question No # 3

// let triangle = (a, b, c) => {
//   let s = (a + b + c) / 2;
//   return s;
//   //   return area;
// };

// let area = (a, b, c) => {
//   let s = triangle(a, b, c);
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// };

// console.log(area(5, 5, 5));

// // Question No # 4

// let mainFuntion (math,arabic,urdu) => {
//     let per =  per(math,arabic,urdu);
//     let avg =  avg(math,arabic,urdu);

//     return `Percentage : ${per} and Average : ${avg}`
// }

// let per (math,arabic,urdu) => {
//     return math+arabic+urdu/100;
// }

// let avg (math,arabic,urdu) => {
//     return math+arabic+urdu/3;
// }

// console.log(mainFuntion(70,80,92));

// ****Asssignment No # 23*****
// // Question No # 1

// var itemsArray = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" },
// ];

// let totalPrice = 0;

// for (const value in itemsArray) {
//   console.log(
//     `${itemsArray[value].name} => ${Number(
//       itemsArray[value].price * itemsArray[value].quantity
//     )}`
//   );
//   totalPrice += Number(itemsArray[value].price);
// }

// console.log(`Total Amount => ${totalPrice}`);

// ****Asssignment No # 23*****
// // Question No # 2

// const user = {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   password: "password123",
//   age: 30,
//   gender: "Male",
//   city: "New York",
//   country: "USA",
// };

// if ("age" in user) {
//   console.log("Age property exists.");
// } else {
//   console.log("Age property does not exist.");
// }

// if ("country" in user) {
//   console.log("Country property exists.");
// } else {
//   console.log("Country property does not exist.");
// }

// if ("firstName" in user) {
//   console.log("First Name property exists.");
// } else {
//   console.log("First Name property does not exist.");
// }

// if ("lastName" in user) {
//   console.log("Last Name property exists.");
// } else {
//   console.log("Last Name property does not exist.");
// }

// ****Asssignment No # 23*****
// // Question No # 3

// function createObject(name, age, rollNum) {
//   this.name = name;
//   this.age = age;
//   this.rollNum = rollNum;
// }

// const user1 = new createObject("Moiz", 20, "CSC-22F-017");
// const user2 = new createObject("Ahmed", 19, "CSC-20F-017");
// const user3 = new createObject("Minhaj", 20, "CSC-21S-017");

// console.log(user1);
// console.log(user2);
// console.log(user3);

// ****Asssignment No # 23*****
// // Question No # 4

// function Person(name, gender, address, education, profession) {
//   this.name = name;
//   this.gender = gender;
//   this.address = address;
//   this.education = education;
//   this.profession = profession;
// }

// const records = [];

// const person1 = new Person(
//   "John Doe",
//   "Male",
//   "123 Main St, Cityville",
//   "Bachelor's in Computer Science",
//   "Software Engineer"
// );
// const person2 = new Person(
//   "Jane Smith",
//   "Female",
//   "456 Oak Rd, Townsville",
//   "Master's in Business Administration",
//   "Manager"
// );
// const person3 = new Person(
//   "Carlos Rivera",
//   "Male",
//   "789 Pine Ln, Villagetown",
//   "High School Diploma",
//   "Construction Worker"
// );
// const person4 = new Person(
//   "Emily Zhang",
//   "Female",
//   "101 Maple Ave, Suburbia",
//   "PhD in Physics",
//   "Professor"
// );

// records.push(person1, person2, person3, person4);
// console.log(records);

// ****Asssignment No # 23*****
// // Question No # 5

function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

function saveToLocalStorage(person) {
  let records = JSON.parse(localStorage.getItem("records")) || [];
  records.push(person);
  localStorage.setItem("records", JSON.stringify(records));
}

// Function to display records from localStorage
function displayRecords() {
  const recordsList = document.getElementById("recordsList");
  recordsList.innerHTML = ""; // Clear the list before displaying

  let records = JSON.parse(localStorage.getItem("records")) || [];
  records.forEach((record) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${record.name}, ${record.gender}, ${record.address}, ${record.education}, ${record.profession}`;
    recordsList.appendChild(listItem);
  });
}

// Event listener for the form submission
document
  .getElementById("personForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked')
      ? document.querySelector('input[name="gender"]:checked').value
      : "";
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const profession = document.getElementById("profession").value;

    // Validate that all fields are filled out
    if (!name || !gender || !address || !education || !profession) {
      alert("Please fill in all fields");
      return;
    }

    // Create a new person object
    const newPerson = new Person(name, gender, address, education, profession);

    // Save the record to localStorage
    saveToLocalStorage(newPerson);

    // Clear the form inputs
    document.getElementById("personForm").reset();

    // Display updated records
    displayRecords();
  });

// Question No # 03
