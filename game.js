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

            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            return;
        }

        let num = this.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        this.container.innerHTML = this.minutes + ":"+num;
     };

     setTime(x, y){
        this.minutes = x;
        this.seconds = y;
     }
}

function evaluate(entry, i){
    if(entry.value !== entry.placeholder){
        entry.style.color = "red";
    }
    else{
        entry.style.color = "gold";
    }

    let nextEntry = document.getElementById("t"+(i+1));

    if(nextEntry)
        nextEntry.focus();

}

let typeScript = "The following paragraph will be a diatribe of me going on and on with the hello world program."+
    "It is a manifestation of my spite against the very concept of word limits."+
    "Hello world is the most basic of all program. It is often used by intro to coding professors to teach students "+
    "about the basics of coding. As we've metioned before, it is really simple. It only consists of a screen having the words "+
    "hello world on it. Now, one can have some creativity with this assignment. For instance, in my junior year of high school"+
    ", I added some extra flare by changing the colors of the background and the text. But, otherwise, there really isn't much"+
    "you can do to mess up or go further beyond with. Especially with those skills. All of these factors is precisely why this is the"+
    "perfect programming assignment for beginners to start out with. I mean, it is not like you there is anything else you can do.";

function createTypeSpace(x, i){
    let container = document.getElementById('entry');
    let entry = document.createElement('input');
    entry.id = "t"+i;
    entry.maxLength = 1;
    entry.placeholder = x;
    entry.addEventListener('input', function(){evaluate(entry, i)});

    let style = document.createElement('style');
    style.innerHTML =`${entry}::placeholder { color: rgba(255, 255, 255, 0.8); }`;
    document.head.appendChild(style);

    container.appendChild(entry);
}

function typeify(x){
    for(let i =0; i < x.length; i++){
        createTypeSpace(x[i], i);
    }

    document.getElementById("t"+0).focus();
}

function beginTypeify(){
    if(!time.countdown){
        time.setTime(1, 0);
        time.beginCountdown();
        setInterval(()=>{if(time.countdown)time.increment()}, 1000);
        typeify(typeScript);
}}

const time = new timer(0, 5);

