/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

round the results to 3 decimal places
*/

const convertBtn = document.getElementById("convert-btn");

// Event listener for button click

convertBtn.addEventListener("click", function() {

    const inputValue = document.querySelector("input").value;

    const meterToFeet = (inputValue * 3.281).toFixed(3);
    // const feetToMeter = (inputValue / 3.281).toFixed(3);
    const literToGallon = (inputValue * 0.264).toFixed(3);
    // const gallonToLiter = (inputValue / 0.264).toFixed(3);
    const kiloToPound = (inputValue * 2.204).toFixed(3);
    // const poundToKilo = (inputValue / 2.204).toFixed(3);
    // console.log("Button clicked");

    // reset the input field

    if (inputValue === "") {
        alert("Please enter a value");
    } 

    // // length conversion

    document.getElementById("length-result").textContent = `${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
    // // volume conversion

    document.getElementById("volume-result").textContent = `${inputValue} liters = ${literToGallon} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`;

    // // mass conversion

    document.getElementById("mass-result").textContent = `${inputValue} kilos = ${kiloToPound} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`;

    // weight conversion

    document.getElementById("weight-result").textContent = `${inputValue} kilos = ${kiloToPound} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`;
});