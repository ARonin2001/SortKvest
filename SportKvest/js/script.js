'use strict'

let humanIMG = document.querySelector('.human_img'),
    human_msg = document.querySelector('.human_msg'),
    win = document.querySelector('.window'),
    overlay = document.querySelector('.overlay'),
    closeSpan = document.querySelector('.overlay__close'),
    overlayQuestion = document.querySelector('.overlay__question'),
    answer = document.querySelectorAll('.overlay__answer');

let questions = {
    title: ["One", "Two", "Trhee"],
    answers: [
        ["OneQ", "TwoQ", "ThreeQ", "nani"],
        ["FourQ", "FiveQ", "SixQ", "nani"],
        ["SevenQ", "EtchQ", "NineQ", "nani"]
    ]
};

humanIMG.addEventListener('click', function() {
    human_msg.classList.toggle("human__msg_active");
});

overlay.addEventListener('click', function(event) {
    let target = event.target;
    if(target.classList.contains('overlay'))
        overlay.classList.toggle('overlay_active');
});

closeSpan.addEventListener('click', function() {
    overlay.classList.toggle('overlay_active');  
});

win.addEventListener('click', function() {
    openCloseOverlay(1);
    overlay.classList.toggle('overlay_active');
    
});

// показ overlay
function openCloseOverlay(number) {
    let answerCount = 0;
    overlayQuestion.innerHTML = questions.title[number];

    questions.answers[number].forEach(function(item) {
        answer[answerCount].innerHTML = item;
        answerCount++;
    });
}