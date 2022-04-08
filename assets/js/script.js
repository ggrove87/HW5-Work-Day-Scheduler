let currentTime = moment();
let currentDay = document.querySelector("#currentDay");
currentDay.textContent = currentTime.format("dddd MMMM Do, YYYY");

let storedData = [];
let allHours = document.querySelectorAll("textarea")
let enteredData = document.querySelectorAll("textarea").value;
displayData();
determineColor();
let container = document.querySelector(".container");

// event listener for the on save buttons
container.addEventListener("click", function (event) {
    event.preventDefault();
    let selectedBtn = event.target;

    if (selectedBtn.matches("button") === true) {
        saveData()
    }
})


// determines the colors for the schedule fields
function determineColor() {
    for (let i = 0; i < allHours.length; i++) {
        let currentTextArea = allHours[i];

        if (currentTime.hours() > currentTextArea.dataset.hours) {
            currentTextArea.classList.add("past");
        } else if (currentTime.hours() < currentTextArea.dataset.hours) {
            currentTextArea.classList.add("future");
        } else {
            currentTextArea.classList.add("present");
        }
    }
}

// saves the entered data into local storage
function saveData() {

    for (let i = 0; i < allHours.length; i++) {
        let currentTextArea = allHours[i];
        localStorage.setItem("userEvent", currentTextArea.value);
        storedData[i] = localStorage.getItem("userEvent");
    }
}

function displayData() {
    for (let i = 0; i < allHours.length; i++) {
        // storedData[i] = JSON.parse(localStorage.getItem("userEvent"));
        console.log(storedData[i]);
    } }