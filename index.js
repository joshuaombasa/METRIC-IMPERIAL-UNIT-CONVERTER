/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// let value = Number(document.getElementById("value").value)
let value = 0


document.getElementById("length")

let volume = document.getElementById("volume");
let mass  =document.getElementById("mass");

let btnEl = document.getElementById("btn");

btnEl.addEventListener("click", function convert() {
    value = document.getElementById("value")
    value = value.value
    lengthConverter();
    volumeConverter();
    massConverter()
    
})

function lengthConverter() {
    
    let feetValue = (value * 3.281).toFixed(3);
    let lengthDom = `<p>${value} meters = ${feetValue} foot </p>`
    document.getElementById("length").innerHTML += lengthDom
}

function volumeConverter() {
    let gallonValue = (value * 0.264).toFixed(3)
    let volumeDOM = `<p> ${value} liters = ${gallonValue} gallons</p>`
    document.getElementById("volume").innerHTML += volumeDOM 
}

function massConverter() {
    let poundValue = (value * 2.204).toFixed(3);
    let massDOM = `<p> ${value} kilograms = ${poundValue} pounds </p>`
    document.getElementById("mass").innerHTML += massDOM
}