"use strict"

// Aufgabe 5

// var wert1= 0;
// var wert2= 0;


// function addiere(wert1 = 0, wert2 = 0){
//     // console.log(wert1 + wert2)
//     console.log("Hallo")
// }      

// Aufgabe 6

// var einkaufsliste = ["Kapern", "Senf", "Butter"];
// // console.log(einkaufsliste)

// function meine_einkaufsliste () {
// console.log("hello")

// }


// Aufgabe 7

const einkaufsliste = ["Kapern", "Senf", "Butter", "Eier", "Hackfleisch", "Kartoffeln", "Zwiebeln"];
einkaufsliste.sort();

console.log(einkaufsliste)


// Aufgabe 8

// new Date().toLocaleString();
// console.log(new Date)

// var currentdate = new Date();
// var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
// + "/" + currentdate.getFullYear() + " @ " 
// + currentdate.getHours() + ":" 
// + currentdate.getMinutes() + ":" + currentdate.getSeconds();

// console.log(currentdate + "Hallo")

var currentdate = new Date(); 
var datetime = "Datum: " + currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear() + " Uhrzeit: "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

// new Date().toLocaleString();
console.log(datetime)