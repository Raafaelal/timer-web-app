export default class TimerDisplay {
    constructor() {
        this.displayElement = document.getElementById('timer-display');
    }

    update(seconds) {
        const formatted = this.formatTime(seconds);
        this.displayElement.textContent = formatted;
    }

    formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}