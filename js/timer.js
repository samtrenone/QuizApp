function renderTimer(totalSeconds, element) {

    let hours = parseInt(totalSeconds / 3600);
    let minutes = parseInt(totalSeconds / 60) - hours * 60;
    let seconds = totalSeconds % 60;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    element.textContent = `${hours}:${minutes}:${seconds}`;
}