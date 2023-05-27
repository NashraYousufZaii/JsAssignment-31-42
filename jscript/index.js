// var currentDateTime = new Date();

// var formattedDateTime = currentDateTime.toLocaleString();

// document.getElementById("datetime").innerHTML = formattedDateTime;

// var currentDate = new Date();

// var monthIndex = currentDate.getMonth();

// var monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var currentMonth = monthNames[monthIndex];

// alert("Current month: " + currentMonth);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var currentDate = new Date();

// var dayIndex = currentDate.getDay();

// var currentDay = dayNames[dayIndex];

// alert("Current day: " + currentDay);

// var dayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var currentDate = new Date();

// var dayIndex = currentDate.getDay();

// var currentDay = dayNames[dayIndex];

// if (currentDay === "Saturday" || currentDay === "Sunday") {
//   alert("It's Fun day");
// }
// var currentDate = new Date();

// var currentDay = currentDate.getDate();

// if (currentDay < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }
// var currentTime = new Date();

// var currentHour = currentTime.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }
// var startingDate = new Date("June 18, 2015");
// var currentDate = new Date();

// var timeDifference = currentDate.getTime() - startingDate.getTime();

// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days passed since 1st Ramadan: " + daysPassed);
// var currentDate = new Date();

// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Updated Date and Time: " + currentDate);

// var currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 200);

// alert("Date 200 years back: " + currentDate);

// var age = prompt("Please enter your age:");

// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);

// function displayCurrentDateTime() {
//   var currentDate = new Date();

//   var dateTimeString = currentDate.toLocaleString();

//   document.write("<p>Current Date and Time: " + dateTimeString + "</p>");
// }

// displayCurrentDateTime();

// function greetUser(firstName, lastName) {
//   var fullName = firstName + " " + lastName;

//   document.write("<h2>Hello " + fullName + "!</h2>");
// }

// greetUser("Nashra", "Aijaz");

// function addNumbers() {
//   var num1 = parseFloat(prompt("Enter the first number:"));

//   var num2 = parseFloat(prompt("Enter the second number:"));

//   var sum = num1 + num2;

//   return sum;
// }

// var result = addNumbers();

// document.write("The sum of the two numbers is: " + result);

// function squareNumber(num) {
//   var square = num * num;
//   return square;
// }

// var number = 7;
// var squaredumber = squareNumber(number);
// document.write("The square of " + number + " is: " + squaredNumber);

// function displayCounting(start, end) {
//   if (start > end) {
//     document.write(
//       "Invalid input: Start number should be less than or equal to the end number."
//     );
//     return;
//   }

//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }

// displayCounting(1, 10);

// function computeHypotenuse(base, height) {
//   function square(number) {
//     return number * number;
//   }

//   var baseSquared = square(base);
//   var heightSquared = square(height);
//   var hypotenuseSquared = baseSquared + heightSquared;
//   var hypotenuse = Math.sqrt(hypotenuseSquared);

//   return hypotenuse;
// }

// var baseLength = 4;
// var heightLength = 4;
// var hypotenuseLength = computeHypotenuse(baseLength, heightLength);
// document.write(
//   "The hypotenuse of the right angle triangle is: " + hypotenuseLength
// );

// function findLongestWord(str) {
//   var words = str.split(" ");

//   var longestWord = "";
//   var longestLength = 0;

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     if (word.length > longestLength) {
//       longestWord = word;
//       longestLength = word.length;
//     }
//   }

//   return longestWord;
// }

// var inputString = "Web Development Tutorial";
// var longestWord = findLongestWord(inputString);
// document.write("The longest word in the string is: " + longestWord);

// function countOccurrences(str, letter) {
//   var count = 0;
//   var lowerStr = str.toLowerCase();
//   var lowerLetter = letter.toLowerCase();

//   for (var i = 0; i < lowerStr.length; i++) {
//     if (lowerStr[i] === lowerLetter) {
//       count++;
//     }
//   }
//   return count;
// }
// var inputString = "JSResourceS.com";
// var inputLetter = "o";
// var occurrences = countOccurrence(inputString, inputLetter);
// document.write(
//   "The number of occurrences of letter '" +
//     inputLetter +
//     "' in the string is: " +
//     occurrences
// );
// function isLeapYear(year) {
//   if (year % 4 !== 0) {
//     return false;
//   } else if (year % 100 !== 0) {
//     return true;
//   } else if (year % 400 !== 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// let year = parseInt(prompt("Enter a year:"));
// if (isLeapYear(year)) {
//   console.log(year + " is a leap year.");
// } else {
//   console.log(year + " is not a leap year.");
// }

// function calculateSemiPerimeter(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateTriangleArea(a, b, c) {
//   let s = calculateSemiPerimeter(a, b, c);
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }

// let sideA = parseFloat(prompt("Enter the length of side A:"));
// let sideB = parseFloat(prompt("Enter the length of side B:"));
// let sideC = parseFloat(prompt("Enter the length of side C:"));

// let triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// document.write("The area of the triangle is: " + triangleArea.toFixed(2));

// function calculateAverage(subject1, subject2, subject3) {
//   return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(totalMarks, obtainedMarks) {
//   return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {
//   let subject1Marks = parseFloat(prompt("Enter marks for subject 1:"));
//   let subject2Marks = parseFloat(prompt("Enter marks for subject 2:"));
//   let subject3Marks = parseFloat(prompt("Enter marks for subject 3:"));

//   let average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
//   let percentage = calculatePercentage(100, average);

//   document.write("Average marks: " + average.toFixed(2));
//   document.write("Percentage: " + percentage.toFixed(2) + "%");
// }

// mainFunction();

// function deleteVowels(sentence) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let result = "";

//   for (let i = 0; i < sentence.length; i++) {
//     let currentChar = sentence[i].toLowerCase();

//     if (!vowels.includes(currentChar)) {
//       result += sentence[i];
//     }
//   }

//   return result;
// }

// let sentence = "Assume that the sentence is not more than 25 characters long.";
// let modifiedSentence = deleteVowels(sentence);
// document.write("Modified sentence: " + modifiedSentence);

// function calculateOvertimePay(hoursWorked) {
//   const regularHours = 10;
//   const hourlyRate = 12.0;
//   const overtimeRate = hourlyRate * 5.5;

//   if (hoursWorked > regularHours) {
//     const overtimeHours = hoursWorked - regularHours;
//     const overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
//   } else {
//     return 0;
//   }
// }

// let hoursWorked = parseInt(prompt("Enter the number of hours worked:"));

// let overtimePay = calculateOvertimePay(hoursWorked);
// document.write("Overtime pay: Rs.", overtimePay.toFixed(2));
