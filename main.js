class Pomodoro {
  constructor(prod, free) {
    this.timeProd = prod;
    this.freeTime = free;
    this.isRunning = true;
    this.seconds = 60;
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
    var prodInter = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        if (time === 0 && this.seconds === 0) {
          this.isRunning = false;
          clearInterval(prodInter);
          this.start();
          this.seconds = 60;
        }
        time--;
        this.seconds = 60;
        return;
      }
      this.showTime(time, this.seconds);
    }, 1000);
  }

  startFree(time) {
    var freeInter = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        if (time === 0 && this.seconds === 0) {
          this.isRunning = true;
          clearInterval(freeInter);
          this.start();
          this.seconds = 3;
        }
        time--;
        this.seconds = 3;
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
      this.seconds = 60;
      this.songStart.play();
      return;
    }
    this.startFree(this.freeTime - 1);
    this.seconds = 60;
    this.songFree.play();
  }
}

const pomo = new Pomodoro(25, 10);
pomo.start();
