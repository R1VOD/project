let time = 60 * 60 * 60;
let timerInterval;

function updateTimer() {
    let timerElement = document.getElementById('timer');
    if (timerElement) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        timerElement.innerText = 
            `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

        if (time > 0) {
            time--;
        } else {
            clearInterval(timerInterval);
            timerElement.innerText = "00 : 00 : 00";
        }
    } else {
        console.error("Элемент с ID 'timer' не найден");
    }
}

updateTimer();
timerInterval = setInterval(updateTimer, 1000);