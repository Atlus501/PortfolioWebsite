class timer {

    constructor(min, sec){
     this.minutes= min,
     this.seconds= sec,
     this.countdown = false,
     this.container = document.getElementById("timeHolder");
     let num = sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

     this.container.innerHTML = this.minutes+":"+num;
    };

    beginCountdown(){
        this.countdown = true;
    };

    increment(){
        this.seconds--;

        if(this.seconds < 0){
            this.seconds = 59;
            this.minutes--;
        }

        if(this.minutes == 0 && this.seconds == 0){
            this.countdown = false;
            this.container.innerHTML = "00:00";
            return;
        }

        let num = this.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        this.container.innerHTML = this.minutes + ":"+num;
     };
}


const time = new timer(1, 0);
time.beginCountdown();

setInterval(()=>{time.increment()}, 1000);