const chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  let min = chronometer.getMinutes();
  minDec.innerText = chronometer.computeTwoDigitNumber(min)[0];
  minUni.innerText = chronometer.computeTwoDigitNumber(min)[1];
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  secDec.innerText = chronometer.computeTwoDigitNumber(sec)[0];
  secUni.innerText = chronometer.computeTwoDigitNumber(sec)[1];
}

function printMilliseconds() {}

function printSplit() {
  const li = document.createElement('li');
  li.innerText = split;
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = ' ';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerText = 'START';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText = 'RESET';
}

function setSplitBtn() {
  const split = chronometer.split();
  printSplit(split);
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerText = 'STOP';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerText = 'SPLIT';
}

function setResetBtn() {
  chronometer.reset();
  clearSplits();
  minDecElement.innerHTML = '0';
  minUniElement.innerHTML = '0';
  secDecElement.innerHTML = '0';
  secUniElement.innerHTML = '0';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {});
