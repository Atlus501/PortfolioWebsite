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

        if(this.minutes <= 0 && this.seconds <= 0){
            this.countdown = false;
            this.container.innerHTML = "00:00";
            let container = document.getElementById("entry");

            clearEntry();
            showResult();

            return;
        }

        let num = this.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        this.container.innerHTML = this.minutes + ":"+num;
     };

     setTime(x, y){
        this.minutes = x;
        this.seconds = y;

        let num = this.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        this.container.innerHTML = this.minutes + ":" +num;
     }
}

function clearEntry(){
    let container = document.getElementById('entry');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function evaluate(entry, i){//the function that the inputscapes uses to see if the user inputs a correct key or not
    if(entry.value !== entry.placeholder){
        entry.style.color = "red";
        entry.style.borderBottomColor = "red";
        game1.incrementScore(1,0);
    }
    else{
        entry.style.color = "gold";
        game1.incrementScore(1,1);
    }

    let nextEntry = document.getElementById("t"+(i+1));

    if(nextEntry)
        nextEntry.focus();

}

function showResult(){//this funciton is going to show the result of the 
    let container = document.getElementById("entry");

    let result = document.createElement('h3');
    result.innerHTML = "Your typing speed is: "+game1.total+" Characters Per Minute.   "+
        "Your accuracy is: "+game1.calculatePercentage()+"%.   "+
        "Thank you for playing! See you next time!";

    container.appendChild(result);
}

class game{
    constructor(){}
    resetScore(){
        this.total = 0;
        this.correct = 0;
    }
    incrementScore(x, y){
        this.total += x;
        this.correct += y;
    }
    calculatePercentage(){
        if(this.total == 0)
            return 0;

        return Math.round(this.correct / this.total * 100);
    }
}

let typeScript = "The following paragraph will be a diatribe of me going on and on with the hello world program."+
    "It is a manifestation of my spite against the very concept of word limits."+
    "Hello world is the most basic of all programs. It is often used by intro to coding professors to teach students "+
    "about the basics of coding. As we've metioned before, it is really simple. It only consists of a screen having the words "+
    "hello world on it. Now, one can have some creativity with this assignment. For instance, in my junior year of high school"+
    ", I added some extra flare by changing the colors of the background and the text. But, otherwise, there really isn't much"+
    "you can do to mess up or go further beyond with. Especially with those skills. All of these factors is precisely why this is the"+
    "perfect programming assignment for beginners to start out with. I mean, it is not like you there is anything else you can do."+
    "Gee whiz. I had no idea that I could possibly yap this much about hello world. This quite unusal for me: usually I'm on the more"+
    " concise side. Anyways, I hope that you are having a great time and that you have a better understanding of what I'm capable of."+
    "And to think that this is what I'm capable of with a few days of studing javascript. This language is honestly magical."+
    " It gives html and css that extra dimension to multiply your capabilities. If this is what javascript can do, I'm curious about"+
    " what react.js will do.";

function createTypeSpace(x, i){
    let container = document.getElementById('entry');
    let entry = document.createElement('input');
    entry.id = "t"+i;
    entry.maxLength = 1;
    entry.placeholder = x;
    entry.addEventListener('input', function(){evaluate(entry, i)});

    container.appendChild(entry);
}

function typeify(x){
    clearEntry();

    for(let i =0; i < x.length; i++){
        createTypeSpace(x[i], i);
    }

    document.getElementById("t"+0).focus();
}

function beginTypeify(){
    if(!time.countdown){
        time.setTime(1, 0);
        time.beginCountdown();
        game1.resetScore();
        
        intervalId = setInterval(()=>{
            if(time.countdown){
                time.increment()
            }else{
                clearInterval(intervalId);}
            }, 1000);
            
        typeify(typeScript);
}else{
    document.getElementById("t0").focus();
}

}

const time = new timer(1, 0);
const game1 = new game();

