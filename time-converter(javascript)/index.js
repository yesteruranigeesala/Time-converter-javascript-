let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");

let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

convertBtn.addEventListener("click", function() {
    let hours = hoursInput.value;
    let minutes = minutesInput.value;

    if (hours === "") {
        errorMsg.textContent = "please enter a valid number of hours";
        timeInSeconds.textContent = "";

    } else if (minutes === "") {
        errorMsg.textContent = "please enter a valid number of minutes";
        timeInSeconds.textContent = "";
    } else {
        let seconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60)

        timeInSeconds.textContent = seconds + " Seconds";
        errorMsg.textContent = "";
    }

})