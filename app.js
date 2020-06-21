// question #1
// 1. Write a program that takes two user inputs for first and last
//  name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var first = prompt("enter first name:")
// var last= prompt("enter last name:")
// var fullname = first + " " +last;
// alert("Hello "+fullname+"!");

// question #2
// 2. Write a program to take a user input about
//  his favorite mobile phone model. Find and display the length of user input in your browser

// var modal = prompt("enter your favorite mobile modal");
// document.write(modal,"<br>");
// len = modal.length;
// document.write("length of string ",len);

// question #3
// 3. Write a program to find the index of letter “n” in the 
// word “Pakistani” and display the result in your browser .
// var word ="Pakistan";
// var char = word.indexOf("n")
// document.write("Index of 'n' ",char);


// question #4
// 4. Write a program to find the last index of letter “l” in the word “Hello World” and 
// display the result in your browser.


// var word = "Hello World";
// w = word.lastIndexOf("l");
// document.write("Last index of  ' l '  is ",w);



// question #5
// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var word ="Pakistan";
// var indx = word.slice(3,4)

// document.write("character at index 3: ",indx);




// question #6

// 6. Repeat Q1 using string concat() method.

// var first = prompt("enter first name:")
// var last= prompt("enter last name:")
// var fullname =first.concat(last);
// alert("Hello "+fullname+"!");

// question #7
// 7. Write a program to replace the “Hyder” to “Islam” in the
//  word “Hyderabad” and display the result in your browser.


// var word = "Hyderabad";
// var afterreplace = word.replace("Hyder","Islam");
// alert(word);

// alert("After replacement :"+ afterreplace);
// question #8
// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replace = message.replace(/and/g,"&");

// document.write(replace);

// question #9
// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.


// var word = "472";
// document.write("value ",word+"<BR>");

// var type = typeof(word);
// document.write( "type   ",type +"<BR>");

// var change = parseInt(word);
// document.write("value ",change+"<BR>");

// var type1 = typeof(change);
// document.write( "type   ",type1 +"<BR>");


// question #10

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var word = prompt("ENTER A WORD OF YOUR CHOICE: ");
// var change =word.toUpperCase();
// document.write(change);


// question #11
// 11. Write a program that takes user input. Convert and show the input in title case.

// var user = prompt("ENTER A WORD OF YOUR CHOICE: ");
// var first =user.slice(0,1);
// var f= first.toUpperCase();
// var other =user.slice(1);
// var l = other.toLowerCase();

// document.write(f+l);




// 12. Write a program that converts the variable num to string.
//  var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// document.write("number in numeric ",num+"<BR>");
// var chan =num.toString();
// var chee =chan.replace(".","");

// document.write("result in string ",chee);



// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol
//  among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
//     Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64


// array=[ ",","!",".","@"];

// var user = prompt("enter username");

// for (i = 0; i < array.length; i++) 
// {
// for (j = 0; j < user.length; j++) 
// {

//     if (user[j]==array[i]) 
//     {
//      document.write("enter a valid UserName");
//     } 

// }

// }

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to
//  enable “search by user input” in an array. After searching, prompt the user whether the given item
//   is found in the list or not. Note: Perform case insensitive search. Whether 
// the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:



// var a = ["cake"," apple pie", "cookie", "chips", "patties"]
// var v = prompt("Welcome to Abc what do you want to order?","cookie");
// var u = v.toLowerCase();
// for (i = 0; i < a.length; i++)
//  {
//  if (u==a[i]) 
//  {
//   document.write(u," is available at index ",i+" in our bakery. ");

//   } 

// }


// document.write(" we are sorry",u,"is not available  ");


// 15. Write a program to take password as an input from user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements,
//  prompt the user to enter a valid password. 
//  For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.


// var pass = prompt("enter your password", ("a - z, A - Z, 0 - 9"));

// document.write("Entered password: ",pass);
// if (pass.length >= 6) {
//     if ((pass >= 0 && pass <= 9) && (pass >= "a" && pass <= "z") && (pass >= "A" && pass <= "Z")) {

//         document.write("valid password.")
//     }
//     else{
//         document.write("please enter a valid password.")
//     }

// }
// else {
//     document.write("password length should not be less than 6.")

// }





// 16. Write a program to convert the following string to an array using string split method.
//  var university = “University of Karachi”; Display the elements of array in your browser.
//  var  university = "University of Karachi";

//  for (let i = 0; i < university.length; i++) {

//     var vv = university.split("");
//     document.write("",vv[i]+"<br>");


//  }







// 17. Write a program to display the last character of a user input.


// var word = prompt("enter a word");

// var last = word.slice(-1);
//  document.write(last);

// var ef = word[-1];

// document.write(ef);






// var arr = word.charAt(-1);
// document.write(arr);



// var making = word.split("");
// var lastChar =Array(making);
// var last = lastChar[2];
// document.write(last);
















// 18. You have a string “The quick brown fox jumps over the lazy dog”.
//  Write a program to count number of occurrences of word “the” in given string.




// var sentence = "The quick brown fox jumps over the lazy dog";

// var small = sentence.toLowerCase();
// var split = small.split(" ");

// var count = 0;
// for (i = 0; i <split.length ; i++)
//  {
//     if (split[i]=="the") {

//         count = count+1;

//     }   
// }
// document.write("Occurance of 'the' is "+count +" in ");
// document.write("<q>");
// document.write(sentence);
// document.write("</q>");




// CHAPTER NO 26-30///

// 1. Write a program that takes a positive integer from user & display the following in your browser.
//  a. number
//   b. round off value of the number 
//   c. floor value of the number 
//   d. ceil value of the number


// var number = +prompt("enter a positive number,", "2.345");
// var no = parseInt(number);

// if (no <= 0) {
//     document.write("enter a valid number");


// } else {
//     document.write("Entere number is:", number+"<br>");
//     var roundd = Math.round(number);
//     document.write("Rounded number is",roundd+"<br>");
//     var ceil = Math.ceil(number);
//     document.write(" ceiling of number is",ceil+"<br>");
//     var flor = Math.floor(number);
//     document.write(" floor of number is",flor+"<br>");

// }




// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number
//  b. round off value of the number 
//  c. floor value of the number 
//  d. ceil value of the number

// var number = +prompt("enter a negative number,", "-2.345");
// var no = parseFloat(number);
// if (no >0)
//  {
//     document.write("enter a valid number");


// } 
// else {
//     document.write("Entered number is:", no+"<br>");
//     var roundd = Math.round(no);
//     document.write("Rounded number is",roundd+"<br>");
//     var ceil = Math.ceil(no);
//     document.write(" ceiling of number is",ceil+"<br>");
//     var flor = Math.floor(no);
//     document.write(" floor of number is",flor+"<br>");

// }


// 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = +prompt("Enter a number:","-346");

// var sab = Math.abs(number);
// document.write(sab);






// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:




// var random = Math.random()*100;

// var rand = Math.round(random);



// document.write("Random dice value is:  ",rand);





// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser


// var choose  = prompt("choose  a number:");
// var shange = choose.toLowerCase();
// var array =["heads","tails"];
// var rand = Math.random()*2;
// var r = Math.round(rand);


// if (r==2) {
//     document.write(r+"<br>");
//     document.write("random coin value :Heads");


//  } 
//  else 
//  {
//     document.write("1<br>");
//     document.write("random coin value :Tails");
//  } 






// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var ra = Math.random()*100;
// var roun = Math.round(ra);
// document.write("Random value between 1 & 100 is: ",roun);



// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// //  Possible user inputs can be: 
// a. 50
// b. 50kgs
//  c. 50.2kgs
//   d.50.2kilograms

// var weight = prompt("enter your weight in kg","50kg");


// var strin = parseInt(weight);
// document.write("The weight of user is "+strin+ " kilograms")






// 8. Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.


// var ss = +prompt("Enter a secret number from 1 to 10");
// var random = Math.random()*10;
// var rr = Math.round(random);
// if (ss==rr) {
//     document.write("Congragulation");

// }
// else{
//     document.write("Try again");
// }






// chapter 31-34////////

// 1. Write a program that displays current date and time in
// your browser.
// var date = Date();
// document.write(date);

// 2. Write a program that alerts the current month in words.
// For example December.
// var array = ["january","fabaruary","march","aprail","may","june","july","august","september","october","november","december"];

// var date = new Date();
// var mnth = date.getMonth();
// var index = array[mnth]+"<br>";
// document.write("current month is ",index);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var array1 = ["sun","mon","tue","wed","thur","fri","sat"];
// var date = new Date();
// var day = date.getDay();
// var indx = array1[day]+"<br>";
// document.write("<h1>Today is ",indx);

// document.write("</h1>");



// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var array1 = ["sun","mon","tue","wed","thur","fri","sat"];
// var date = new Date();
// var day = date.getDay();
// var indx = array1[day]+"<br>";
// document.write("<h1>Today is ",indx);
// if (day==0||day==6) {
//     document.write("<h1> It’s Fun day")
//     document.write("</h1>")

// }
// else{
//     document.write("working day")
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.





// var date = new Date();
// var day = date.getDate();


// if (day<16) {
//     document.write("First fifteen days of the month");

// } else {
//     document.write("Last days of the month")


// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var date = new Date();
// document.write("Current date is:",date+"<br>");
// var miliseconds = date.getTime();

// var minutes =miliseconds/1000*60;

// document.write("Elapsed miliseconds since 1 january 1970",miliseconds+"<br>");

// document.write("Elapsed minutes since 1 january 1970",minutes+"<br>");


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.



// var date = new Date();
// var time = date.getHours();
// if (time>=12) {
//     document.write("P.M");

// } else{
//     document.write("A.M");
// }



// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


// var date = new Date();

// var laterDate = date.setFullYear(2020,12,31);
// var time = date.setHours(0,0,0,0);
// var day = date.setDate("3");

// document.write(date);



// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var date = new Date();

// var old = date.setFullYear(2015,6,18);

// var newDate = new Date();


// var oldmili = date.getDay()

// var newmili = newDate.getDay();

// var diff = newmili - oldmili ;

// document.write(date+"<br>");

// document.write(diff+"<br>");
// document.write(newDate+"<br>");




// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
























// last chapter 35-38/////////////////
// 1. Write a function that displays current date & time in your
// browser.

// function func1() {
//     var date = Date();
//    document.write(date);

// }
// func1();






// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


// function fullname() {
//     var first = " ruqia ";
//     var last = " bibi ";
//     var fill = first +last;
//     alert("hello"+fill)

// }

// fullname()


// function name(a,b) {

//     var full = a +b;
//     alert("Hello"+full);
// }

// name( " Ruqia "," Bibi ")



// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.



// function add(a,b) {

//     var adding = a +b;
//     alert(adding);
// }
// var firstname = +prompt("enter first name");
// var lastname = +prompt("enter last name")
// add( firstname,lastname)


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var sum;var sub;var mul;var divi;
// function calc(n1, n2, operator) {
//     if (operator === "+") {
//         sum = n1 + n2;
//         return sum; 
//     }
//     else if (operator === "-") {
//         sub = n1 - n2;
//         return sub;

//     }
//     else if (operator === "*") {
//         mul = n1 * n2;
//         return mul; 
//     }
//     else if (operator === "/") {
//         divi = n1 / n2;
//         return divi;
//     }
//     else { 
//         alert ("choose a valid operator");
//      }
// }
// var n1 = +prompt("enter first number ");
// var n2 = +prompt("enter second number ");
// var operator = prompt("enter  operator ");
// calc(n1, n2, operator)
// alert("after calculation of "+n1+"and"+n2+" is "+calc(n1,n2,operator))



// 5. Write a function that squares its argument.

// var a;
// function square(num) {
//    a= Math.pow(num,2);
//    return a;

// }
// var n5 = prompt("enter a number to find its square")
// square(n5);
// alert("square of entered number is "+a);











// 6. Write a function that computes factorial of a number.



// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var strt = +prompt("enter starting of counting")//2

// var end = +prompt("enter ending of counting")//5

// function count() {
//     document.write("<h1>counting</h1>");

//     for (i = strt; i <= end ; i++) {
//         document.write(i+"<br>");

//     }
// }
// count()



// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()




// var base = prompt("enter value for base");

// var prepandicular = prompt("enter value for prepandicular");




// calculateHypotenuse()
// calculateSquare()


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables



// function area(a,b) {

//     var area = a*b;
//    alert("area of rectangle is "+area)
// }

// area(20,30);
// var ara;
// function area(a,b) {

//     ara = a*b;
//     return ara;
// }
// var h = prompt("enter height for area of rectangle");
// var w = prompt("enter width for area of rectangle");
// area(h,w);

// alert("area of rectangle is "+ara)



// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?


// var a = "civic";
// for
// var b = a[-1]




// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'



// var apple = "the quick brown fox";
// document.write("EXAMPLE STRING : " + apple + "<br>");
// document.write(" EXPECTED OUTPUT : <br>");
// function func() {
//     var a = apple.split(" ");
// for (i = 0; i < a.length; i++) {

//     var going_slice = a[i];

//     var b = going_slice.slice(0, 1).toUpperCase();


//     var c = going_slice.slice(1).toLowerCase();


//     document.write(b+c+" ");

// }
// }


// func()

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'




// function a() {
//     var sentense = "Web Development Tutorial";

// var spit = sentense.split(" ");

// for (i = 0; i < spit.length; i++) {
//     var word = spit[i];
//     var len = word.length;

//     if (spit[i].length > spit[i+1].length) {
//         document.write(spit[i] + "<br>");

//     }

// }
// }
// a()


// 13. Write a JavaScript function that accepts two arguments, a string and a letter
// and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// function abl(a, b) {

//     return "a + b";

// }

// abl("JSResourceS.com", "o")

// alert(abl(a,b))



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

var radious = 23;
function calcCircumference() {
  
    cc = 2*3.14*radious;
    document.write("circumference of circle is "+cc+"<br>")
    
}
function calcArea() {
    ac = 3.14*(Math.pow(radious,2));
    document.write("Area of circle is "+ac);
}
calcArea()
calcCircumference()








