const startBtn = document.querySelector('button[data-action="start"');
const stopBtn = document.querySelector('button[data-action="stop"');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let bodyColor = null;
let interval = null;

setRandomColor = () => {
    bodyColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    document.body.style.background = bodyColor;
}



startBtn.addEventListener('click',onStartClick);

function onStartClick() {
    startBtn.disabled = true;
    interval=setInterval(() => setRandomColor(), 1000);
}

stopBtn.addEventListener('click',onStopClick);

function onStopClick() {
    startBtn.disabled = false;
    clearInterval(interval);
};