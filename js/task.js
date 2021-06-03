function onInit() {
    var external = "External JS File";
    console.log(external);
}
onInit();
function getPlatform() {
    console.log("platform: " + window.navigator.platform);
}
getPlatform();
function getBrowserVersion() {
    console.log("browser: " + window.navigator.appName)
}
getBrowserVersion();
function getCompany() {
    console.log("company: " + window.navigator.vendor)
}
getCompany();
function isOnline() {
    if (navigator.onLine) {
        console.log("browser is: Online");
    } else {
        console.log("browser is: Offline")
    }
}
isOnline();
function windowHeightAndWidth() {
    console.log("window.screen.availHeight:" + window.screen.availHeight);
    console.log("window.screen.height:" + window.screen.height);
    console.log("window.screen.availWidth:" + window.screen.availWidth);
    console.log("window.screen.width:" + window.screen.width);
}
windowHeightAndWidth();


 /*
window.location
Write a function that prints out website’s url information in the console:
● full url address
● domain name
● used protocol
● parameters which are part of URL.
Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions
*/
function getUrl() {
    console.log("Url is " + window.location.href);
    console.log("Domain is " + window.location.host);
    console.log("Protocol is " + window.location.protocol);
    console.log("parameters which are part of URL are port " + window.location.port);
    console.log("parameters which are part of URL are search " + window.location.search);
}
getUrl();
/*
function reloadPage() {
    window.location.reload();
}
reloadPage();
*/
/*
function redirectUrl() {
    window.location.assign("https://www.google.rs/");
}
redirectUrl();
*/
/*
window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the
stored value.
Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle.
*/
function storePassedData(key, value) {
    window.localStorage.setItem(key, value);
}
storePassedData("Name", "Borislav");
storePassedData("zip", 11000);
function readStoredData(key) {
    console.log(window.localStorage.getItem(key));
}
readStoredData("zip");
function removeItem(key) {
    window.localStorage.removeItem(key);
}
removeItem("zip");
/*
function removeAll () {
    window.localStorage.clear();
}
removeAll();
*/
function checkForData() {
    if (window.localStorage.length === 0) {
        console.log("There is no data");
    } else {
        console.log("There IS DATA!")
    }
}
checkForData();
function storeSessionPassedData(key, value) {
    window.sessionStorage.setItem(key, value)
}
storeSessionPassedData("Name", "Borislav");
/*
window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back.
*/
/*
function redirectUrl() {
    window.location.assign("https://www.google.rs/");
    window.location.assign("https://www.blic.rs/");
    window.location.assign("https://www.winwin.rs/");
}
redirectUrl();
*/
function onePageBack() {
    window.history.back();
}
twoPagesBack();
function twoPagesBack() {
    window.history.go(-2);
}
twoPagesBack();
/*
Window Methods
● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer is used in the confirm
dialog
● The format of the message in the dialog should be: "We will submit this
answer now! " + the answer
● If the user clicks OK, show alert with success message
● If the user clicks Cancel, don't show anything
*/
/*
function greetingMessage() {
    window.alert("Welcome to our Page");
}
greetingMessage();
*/
var askUserQuestion = function () {
    var age = window.prompt("How old are you?");
    window.sessionStorage.setItem("age", age);
}
askUserQuestion();
function confirmDialogue() {
    if (window.sessionStorage.getItem("age") === true) {
        return window.alert("You can enter our site");
    } else {
        return window.alert("You MUST insert your age");
    }
}
confirmDialogue();
/*
Global JavaScript Objects (homework)
Math
● Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
*/
function randomTen() {
    var result = [];
    for (var i = 0; i <= 10; i++) {
        result[result.length] = Math.round(50 * Math.random());
    }
    return result;
}
console.log(randomTen());
/*
/*
● Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
Date
● Print out the whole date object in the console.
● Print out the current time in the console.
● Print out the current date in the console.
*/
/*
● Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
*/
function roundTwoDecimals(array) {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[result.length] = parseFloat(50 * Math.random()).toFixed(2);
    }
    return result;
}
console.log(roundTwoDecimals(randomTen()));
/*
● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
*/
function floorArray(array) {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[result.length] = Math.floor(50 * Math.random());
    }
    return result;
}
console.log(floorArray(randomTen));
/*
● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
*/
function findMax(array) {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[result.length] = 50 * Math.random();
    }
    console.log(result);
    return Math.max.apply(Math, result);
}
console.log(findMax());
