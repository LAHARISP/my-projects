let timer;
let timeLeft = 1500; // 25 minutes in seconds
let running = false;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const dateDayDisplay = document.getElementById('date-day');
const fiveMinButton = document.getElementById('five-min');
const tenMinButton = document.getElementById('ten-min');
// Function to update the date and day
function updateDateAndDay() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const day = daysOfWeek[now.getDay()];
  const date = now.toLocaleDateString(); // Format as MM/DD/YYYY by default
  dateDayDisplay.textContent = `${day}, ${date}`;
}
// Function to update the timer
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
// Function to start the timer
function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
      } else {
        clearInterval(timer);
        running = false;
        alarmSound.play(); // Play alarm sound when time is up
        alert('Time is up! Take a 5 or 10-minute break.');
      }
    }, 1000);
  }
}
// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
  running = false;
}
// Function to reset the timer
function resetTimer() {
  clearInterval(timer);
  running = false;
  timeLeft = 1500; // Reset to 25 minutes
  updateTimer();
}
// Function to set timer for 5 minutes
function setFiveMinTimer() {
  clearInterval(timer);
  running = false;
  timeLeft = 300; // 5 minutes in seconds
  updateTimer();
}
// Function to set timer for 10 minutes
function setTenMinTimer() {
  clearInterval(timer);
  running = false;
  timeLeft = 600; // 10 minutes in seconds
  updateTimer();
}
// Event listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
fiveMinButton.addEventListener('click', setFiveMinTimer);
tenMinButton.addEventListener('click', setTenMinTimer);
// Update the date and day on page load
updateDateAndDay();
// Task List Management
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasks');
const newTaskInput = document.getElementById('new-task');
addTaskButton.addEventListener('click', () => {
  const taskName = newTaskInput.value;
  if (taskName) {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"> ${taskName}`;
    taskList.appendChild(li);
    newTaskInput.value = '';
  }
});
