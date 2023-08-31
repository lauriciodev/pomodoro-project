class Pomodoro {
  constructor(prod, free) {
    this.timeProd = prod;
    this.freeTime = free;
    this.isRunning = true;
    this.seconds = 60;
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
    time--;
    var prodInter = setInterval(() => {
      this.seconds--;
      if (this.seconds <= 0) {
        if (time <= 0 && this.seconds === 0) {
          time = 0;
          clearInterval(prodInter);

          this.isRunning = false;
          this.start();
          this.seconds = 60;
          return;
        }
        time--;
        this.seconds = 60;
        return;
      }
      this.showTime(time, this.seconds);
    }, 1000);
  }

  startFree(time) {
    time--;
    var freeInter = setInterval(() => {
      this.seconds--;
      if (this.seconds <= 0) {
        if (time <= 0 && this.seconds === 0) {
          time = 0;
          clearInterval(freeInter);
          this.isRunning = true;
          this.start();
          this.seconds = 60;

          return;
        }
        time--;
        this.seconds = 60;
        return;
      }
      this.showTime(time, this.seconds);
    }, 1000);
  }

  start() {
    if (this.isRunning) {
      this.startProd(this.timeProd);
      this.songStart.play();
      return;
    }

    this.startFree(this.freeTime);
    this.songFree.play();
  }
}

const pomo = new Pomodoro(2, 2);
pomo.start();
