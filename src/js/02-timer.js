import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (Date.now() >= selectedDates[0]) {
            Notify.failure("Please choose a date in the future");
            btnStart.disabled = true;
            return;
        }        
        btnStart.disabled = false;
    },
    
}

const dp=document.querySelector('#datetime-picker')
const fp = flatpickr(dp, options);
const countdownRef = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds:document.querySelector('span[data-seconds]'),
}
btnStart.addEventListener('click', () => {
    const intervalId = setInterval(() => {
        if (fp.selectedDates[0] < Date.now()) {
            dp.disabled = false;
            clearInterval(intervalId);
            return;
        }
        const countdown = convertMs(fp.selectedDates[0] - Date.now());        
        countdownRef.seconds.textContent = addLeadingZero(countdown.seconds);
        countdownRef.minutes.textContent = addLeadingZero(countdown.minutes);
        countdownRef.hours.textContent = addLeadingZero(countdown.hours);
        countdownRef.days.textContent = addLeadingZero(countdown.days);
        
    },
        1000);
    btnStart.disabled = dp.disabled = true;
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value)
{ return String(value).padStart(2,'0'); }