export default class Timer {
    constructor() {
        this.startTime = null;
        this.pausedTime = 0;
        this.isRunning = false;
        this.isPaused = false;
    }

    start() {
        if (!this.isRunning) {
            this.startTime = Date.now() - this.pausedTime;
            this.isRunning = true;
            this.isPaused = false;
        } else if (this.isPaused) {
            this.startTime = Date.now() - this.pausedTime;
            this.isPaused = false;
        }
    }

    pause() {
        if (this.isRunning && !this.isPaused) {
            this.pausedTime = this.getElapsedTime() * 1000;
            this.isPaused = true;
        }
    }

    end() {
        this.startTime = null;
        this.pausedTime = 0;
        this.isRunning = false;
        this.isPaused = false;
    }

    getElapsedTime() {
        if (!this.startTime) return 0;
        if (this.isPaused) return this.pausedTime / 1000;
        return (Date.now() - this.startTime) / 1000;
    }

    formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}