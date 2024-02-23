const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('timer');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    // Quando o contador chegar a 0, pare de contar
    if (time < 0) {
        clearInterval(updateCountdown);
        countdownEl.innerHTML = "00:00";
    }
}
