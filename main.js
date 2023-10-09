class Pomodoro {
  constructor(prod, free) {
    this.timeProd = prod;
    this.freeTime = free;
    this.isRunning = true;
    this.seconds = 5;
    this.freeInter = null;
    this.prodInter = null;
    this.element = document.getElementById("time");
    this.elementStatus = document.getElementById("status");
    this.songFree = document.getElementById("free");
    this.songStart = document.getElementById("start");
    this.buttonStartPause = document.getElementById("start-pause-btn");
    this.currentTime = {
      min: prod,
      sec: 5,
    };
  }

  showTime(minutes, seconds) {
    if (this.isRunning) {
      this.elementStatus.innerHTML = "Estude!";
      this.elementStatus.style.backgroundColor = "#2a27ae";
    } else {
      this.elementStatus.innerHTML = "Descanse";
      this.elementStatus.style.backgroundColor = "#072b27";
    }
    this.element.innerHTML = `${minutes < 10 ? "0" + minutes : minutes} :  ${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  startProd(time) {
    this.songStart.play();
    this.buttonStartPause.removeAttribute("disabled");
    this.prodInter = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        if (time === 0 && this.seconds === 0) {
          this.isRunning = false;
          clearInterval(this.prodInter);
          this.start();
          this.seconds = 5;
        }
        time--;
        this.seconds = 5;
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
    this.songFree.play();
    this.buttonStartPause.setAttribute("disabled", "true");
    this.freeInter = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        if (time === 0 && this.seconds === 0) {
          this.isRunning = true;
          clearInterval(this.freeInter);
          this.start();
          this.seconds = 5;
        }
        time--;
        this.seconds = 5;
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
    if (!this.isRunning) {
      this.startFree(this.freeTime - 1);
      return;
    }
    this.startProd(this.timeProd - 1);
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
    this.reset();
  }

  startMyApp() {
    this.pomodoro.start();
    this.isRunning = true;
  }

  startPause() {
    this.buttonStartPause.addEventListener("click", () => {
      if (this.isRunning) {
        this.pomodoro.stopInterval(this.pomodoro.prodInter);

        this.isRunning = false;
        return;
      }

      this.pomodoro.timeProd = this.pomodoro.currentTime.min + 1;
      this.pomodoro.seconds = this.pomodoro.currentTime.sec + 1;
      this.startMyApp();
    });
  }

  reset() {
    this.buttonRestart.addEventListener("click", () => {
      console.log(this.pomodoro.timeProd);
      console.log(this.pomodoro.seconds);
    });
  }
}

const pomo = new Pomodoro(1, 1);
const control = new PomodoroControl(pomo);
