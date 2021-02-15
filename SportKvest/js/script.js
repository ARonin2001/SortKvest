'use strict'

let wrapp = document.querySelector('.wrapp'),
    humanIMG = document.querySelector('.human_img'),
    human_msg = document.querySelector('.human_msg'),
    win = document.querySelector('.window'),
    overlay = document.querySelector('.overlay'),
    closeSpan = document.querySelector('.overlay__close'),
    overlayQuestion = document.querySelector('.overlay__question'),
    answer = document.querySelectorAll('.overlay__answer'),
    moon = document.querySelector('.moon__img'),
    clock = document.querySelector('.moon__clock'),
    bookIMG = document.querySelector('.book img');

let questions = {
    title: ["1. В каком году был изобретён баскетбол?", 
    "2. ", 
    "3. ", 
    "4. ", 
    "5. ", 
    "6. Сколько шагов при ведении мяча разрешено в баскетболе?", 
    "7. Сколько длится баскетбольный матч?"],
    answers: [
        ["1900", "1891", "1872", "1723"],
        ["FourQ", "FiveQ", "SixQ", "nani"],
        ["SevenQ", "EtchQ", "NineQ", "nani"],
        ["SevenQ", "EtchQ", "NineQ", "nani"],
        ["SevenQ", "EtchQ", "NineQ", "nani"],
        ["7", "3", "2", "Сколько угодно"],
        ["1-2 часа", "1 час", "3 часа", "30 минут"]
    ]
};

humanIMG.addEventListener('click', function() {
    human_msg.classList.toggle("human__msg_active");
});

overlay.addEventListener('click', function(event) {
    let target = event.target;
    if(target.classList.contains('overlay'))
        overlayActive();
});

closeSpan.addEventListener('click', function() {
    overlayActive();
});

win.addEventListener('click', function() {
    openCloseOverlay(5);
    overlayActive();
});

moon.addEventListener('click', function() {
    moonActive();
});

clock.addEventListener('click', function() {
    openCloseOverlay(6);
    overlayActive();
});

bookIMG.addEventListener('click', function() {
    openCloseOverlay(0);
    overlayActive();
});

// вставка заголовка и ответов
function openCloseOverlay(number) {
    let answerCount = 0;
    overlayQuestion.innerHTML = questions.title[number];

    questions.answers[number].forEach(function(item) {
        answer[answerCount].innerHTML = item;
        answerCount++;
    });
};
function overlayActive() {
    overlay.classList.toggle('overlay_active');
};
function moonActive() {
    moon.style.cssText = "left: 150px; "+
        "transform: rotate(120deg); "+
        "transition: all .9s;";
    setTimeout(moonDown, 700);
};
function moonDown() {
    moon.style.top = "100vh";
    setTimeout(() => moon.style.display = "none", 420);
}