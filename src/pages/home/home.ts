import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  timer : number = 0;
  intervalId : number;

  constructor() {
  }

  start() {
    this.intervalId = setInterval(() => {
      this.timeIt()
    }, 1000);
  }

  stop() {
       clearInterval(this.intervalId);
       this.intervalId = -1;
    }

/*  reset() {
     this.timeReset();
     this.clearInterval(timer);
  } */

  startBtn() {
    if(this.intervalId == -1) {
          this.start();
        }
}

  stopBtn() {
    this.stop();
  }

  timeIt() {
   this.timer++;
  }

  /*timeReset() {
    timer = 0;
    clearInterval(timer);
  } */

  ngOnInit() {
    this.start();
  }
}
