let intervalId=null;
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStop.disabled = true;
btnStart.addEventListener('click', () => {
    intervalId=setInterval(() =>
    { document.body.style.background = getRandomHexColor() }, 1000);    
    toggleButtonsDisability()
})
btnStop.addEventListener('click', () => {
    clearInterval(intervalId);
    toggleButtonsDisability()
}
)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function toggleButtonsDisability() {
  btnStart.disabled = !btnStart.disabled;
  btnStop.disabled = !btnStop.disabled;
}