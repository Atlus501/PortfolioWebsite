var added = false;

function respondHelper(x){

    switch(x){
        case 1:
            answer = "Fantastic! Before we go, shall we play a game?";
            break;
        case 2:
            answer = "You might wanna take a look. All you need to do is hover over the page";
            break;
        case 3:
            answer = "Excellent! It'll be ready shortly";
            break;
        case 4:
            answer = "Very well. Have a splendid day";
            break;
    }

    console.log(x);

    let response = document.getElementById("response2");

    if(x <= 2)
     response = document.getElementById("response1");

    response.innerHTML = answer;
    response.style.animation = 'none';
    response.offsetHeight;
    response.style.animation = 'appear 2s ease-out forwards';

    if(x == 1 && !added){
            addQuestion2();
    }

    if(x==3){
        setTimeout(function(){window.location.href = 'game.html'}, 4000);
    }
}

function addQuestion2(){

    let button1 = document.createElement('button');
    button1.id = "answer";
    button1.textContent = "Yes";

    let button2 = document.createElement('button');
    button2.id = "answer";
    button2.textContent = "No";

    let container = document.getElementById("question2");

    container.appendChild(button1);
    container.appendChild(button2);

    button1.addEventListener("click", function(){respondHelper(3)});
    button2.addEventListener("click", function(){respondHelper(4)});
    added = true;
}