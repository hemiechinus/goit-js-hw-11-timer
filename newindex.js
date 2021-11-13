class timeCounter {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(
      `${selector} .value[data-value="hours"]`
    );
    this.minutes = document.querySelector(
      `${selector} .value[data-value="mins"]`
    );
    this.seconds = document.querySelector(
      `${selector} .value[data-value="secs"]`
    );
  }
  zero(value) {
    return value < 10 ? `0${value}` : value;
  }
  countDown() { 
    const currentTime = new Date();
    this.createValue(currentTime);
  }
    showTime() {
        if (this.targetDate > Date.now()) {
            const timerId = setInterval(() => {
                if (this.targetDate > Date.now()) {
                    this.countDown()
                } else {
                    console.log('Увага! Введена дата вже настала.');
                    clearInterval(timerId)
                }
            }, 1000);
        } else {
            console.log('Помилка! Введена невірна дата (дата вже минула).');
        };
    
  }

  createValue(currentTime) {
    const time = this.targetDate - currentTime;
    this.days.textContent = this.zero(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hours.textContent = this.zero(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    this.minutes.textContent = this.zero(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    this.seconds.textContent = this.zero(
      Math.floor((time % (1000 * 60)) / 1000)
    );
  }
}

const myTimer = new timeCounter({
  selector: "#timer-1",
  targetDate: "Dec 31, 2021",
});

function startTimer() {
  myTimer.showTime();
}
startTimer();
