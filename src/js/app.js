// This file initializes the timer functionality and handles button events for starting, pausing, and ending the timer.

import Timer from './timer.js';
import TimerDisplay from '../components/timer-display.js';

const timer = new Timer();
const timerDisplay = new TimerDisplay();
let updateInterval = null;

function updateDisplay() {
    const elapsedTime = timer.getElapsedTime();
    timerDisplay.update(elapsedTime);
}

document.getElementById('start-button').addEventListener('click', () => {
    timer.start();
    if (!updateInterval) {
        updateInterval = setInterval(updateDisplay, 100);
    }
    updateDisplay();
    
    // Enable other buttons when timer starts
    document.getElementById('pause-button').disabled = false;
    document.getElementById('end-button').disabled = false;
    document.getElementById('reset-button').disabled = false;
});

document.getElementById('pause-button').addEventListener('click', () => {
    timer.pause();
    if (timer.isPaused && updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
});

document.getElementById('end-button').addEventListener('click', () => {
    timer.pause(); // Changed from timer.pause() to timer.end()
    updateDisplay();
    
    // Disable start button and other buttons after ending
    document.getElementById('start-button').disabled = true;
    document.getElementById('pause-button').disabled = true;
    document.getElementById('end-button').disabled = true;
    
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
});

document.getElementById('reset-button').addEventListener('click', () => {
    timer.end();
    timerDisplay.update(0);
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
    
    // Re-enable start button after reset
    document.getElementById('start-button').disabled = false;
    document.getElementById('pause-button').disabled = true;
    document.getElementById('end-button').disabled = true;
});

document.getElementById('see-time-button').addEventListener('click', () => {
    const elapsedTime = timer.getElapsedTime();
    const formattedTime = timer.formatTime(elapsedTime);
    alert(`Running time: ${formattedTime}`);
});