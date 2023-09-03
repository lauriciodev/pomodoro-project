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
  }

  showTime(minutes, seconds) {
    if (this.isRunning) {
      this.elementStatus.innerHTML = "PRODUZIR";
      this.elementStatus.style.backgroundColor = "#4a6ec1";
    } else {
      this.elementStatus.innerHTML = "DESCANÇAR";
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
          this.stopInterval(this.prodInter);

          this.start();
          this.seconds = 5;
          return;
        }
        time--;
        this.seconds = 5;
        return;
      }
      this.showTime(time, this.seconds);
    }, 1000);
  }

  startFree(time) {
    this.freeInter = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        if (time === 0 && this.seconds === 0) {
          this.isRunning = true;
          this.stopInterval(this.freeInter);

          this.start();
          this.seconds = 5;
          return;
        }
        time--;
        this.seconds = 5;
        return;
      }
      this.showTime(time, this.seconds);
    }, 1000);
  }

  stopInterval(interval) {
    clearInterval(interval);
  }

  start() {
    if (this.isRunning) {
      this.startProd(this.timeProd - 1);
      this.seconds = 5;
      this.songStart.play();

      return;
    }
    this.startFree(this.freeTime - 1);
    this.seconds = 5;
    this.songFree.play();
  }
}

const pomo = new Pomodoro(10, 5);
pomo.start();
