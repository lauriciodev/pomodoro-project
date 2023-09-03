class Pomodoro {
  constructor(prod, free) {
    this.timeProd = prod;
    this.freeTime = free;
    this.isRunning = true;
    this.seconds = 6;
    this.freeInter = null;
    this.prodInter = null;
    this.element = document.getElementById("time");
    this.elementStatus = document.getElementById("status");
    this.songFree = document.getElementById("free");
    this.songStart = document.getElementById("start");
    this.currentTime = {
      min: 0,
      sec: 0,
    };
  }

  showTime(minutes, seconds) {
    if (this.isRunning) {
      this.elementStatus.innerHTML = "Hora de estuadar !";
      this.elementStatus.style.backgroundColor = "#4a6ec1";
    } else {
      this.elementStatus.innerHTML = "Descanse um puco";
      this.elementStatus.style.backgroundColor = "green";
    }
    this.element.innerHTML = `${minutes < 10 ? "0" + minutes : minutes} :  ${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  startProd(time) {
    this.prodInter = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        if (time === 0 && this.seconds === 0) {
          this.isRunning = false;
          clearInterval(this.prodInter);
          this.start();
          this.seconds = 6;
        }
        time--;
        this.seconds = 6;
        return;
      }
      this.setCurrentTime(time, this.seconds);
      this.showTime(time, this.seconds);
    }, 1000);
  }

  setCurrentTime(min, sec) {
    this.currentTime.min = min;
    this.currentTime.sec = sec;
  }

  startFree(time) {
    this.freeInter = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        if (time === 0 && this.seconds === 0) {
          this.isRunning = true;
          clearInterval(this.freeInter);
          this.start();
          this.seconds = 6;
        }
        time--;
        this.seconds = 6;
        return;
      }
      this.setCurrentTime(time, this.seconds);
      this.showTime(time, this.seconds);
    }, 1000);
  }

  stopInterval(interval) {
    clearInterval(interval);
  }

  start() {
    if (this.isRunning) {
      this.startProd(this.timeProd - 1);
      this.seconds = 6;
      this.songStart.play();
      return;
    }
    this.startFree(this.freeTime - 1);
    this.seconds = 6;
    this.songFree.play();
  }
}

//pomodoro controles

class PomodoroControl {
  constructor(pomodoro) {
    this.pomodoro = pomodoro;
    this.buttonStartPause = document.getElementById("start-pause-btn");
    this.buttonRestart = document.getElementById("restart-btn");
    this.isRunning = false;
    this.startPause();
  }

  startMyapp() {
    this.pomodoro.start();
    this.isRunning = true;
  }

  startPause() {
    this.buttonStartPause.addEventListener("click", () => {
      if (this.isRunning) {
        this.pomodoro.stopInterval(this.pomodoro.prodInter);
        console.log(
          `${this.pomodoro.currentTime.min}: ${this.pomodoro.currentTime.sec}`
        );
        this.isRunning = false;
        return;
      }

      this.pomodoro.timeProd = this.pomodoro.currentTime.min + 1;
      this.pomodoro.seconds = this.pomodoro.currentTime.sec + 1;

      this.startMyapp();
      return;
    });
  }
}

const pomo = new Pomodoro(10, 12);
const control = new PomodoroControl(pomo);
control.startMyapp();
