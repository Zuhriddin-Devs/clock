function updateClock() {
    const elHours = document.querySelector("#js-hours");
    const elMinutes = document.querySelector("#js-minutes");
    const elSeconds = document.querySelector("#js-seconds");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    elHours.textContent = hours;
    elMinutes.textContent = minutes;
    elSeconds.textContent = seconds;
};

// UPDATE THE CLOCK EVERY SECOND
setInterval(updateClock, 1000);

// INITIAL UPDATE
updateClock();