let currentTime = moment();
let currentDay = document.querySelector("#currentDay");
currentDay.textContent = currentTime.format("dddd MMMM Do, YYYY");

let allHours = document.querySelectorAll("textarea")

displayData();

let container = document.querySelector(".container");

// event listener for the on save buttons
container.addEventListener("click", function (event) {
    event.preventDefault();
    let selectedBtn = event.target;

    if (selectedBtn.matches("button") === true || selectedBtn.matches("i")) {
        saveData()
    }
})


// determines the colors for the schedule fields
function displayData() {
    for (let i = 0; i < allHours.length; i++) {
        let currentTextArea = allHours[i];
        currentTextArea.value = localStorage.getItem(currentTextArea.dataset.hours);
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
        console.log(currentTextArea);
        localStorage.setItem(currentTextArea.dataset.hours, currentTextArea.value);    
    }
}
