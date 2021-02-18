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
    bookIMG = document.querySelector('.book img'),
    ballIMG = document.querySelector('.ball__img'),
    hoov = document.querySelector('.hoov'),
    bottom = document.querySelector('.bottom'),
    btnForm = document.querySelector('.form__btn'),
    parol = document.querySelector('#parol'),
    form = document.querySelector('.form'),
    inputAfter = document.querySelector('.form__input_after');


let questions = {
    title: ["1. В каком году был изобретён баскетбол?", 
    "2. Сколько шагов при ведении мяча разрешено в баскетболе?", 
    "3. Высота корзины?", 
    "4. Размер игровой площадки?", 
    "5. ", 
    "6. Основатель баскетбола?", 
    "7. Сколько длится баскетбольный матч?"],
    answers: [
        ["1900", "1891", "1872", "1723"],
        ["7", "3", "2", "Сколько угодно"],
        ["3,05м", "4м", "3,02м", "2,5м"],
        ["71Х34", "25Х15", "30Х21", "28Х15"],
        ["SevenQ", "EtchQ", "NineQ", "nani"],
        ["Оливер Твист", "Майкл Джексон", "Джеймс Нейсмит", "Джон Смит"],
        ["1-2 часа", "1 час", "3 часа", "30 минут"]
    ]
};

let count = 0;

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

ballIMG.addEventListener('click', function(event) {
    let target = event.target;

    if(!target.classList.contains('ball__foliage')) {
        count++;
        console.log(count);
        if(count == 3) {
            ballIMG.style.cssText = "left: -15.2em; " +
                "top: 40rem; " +
                "transition: all .4s";
        }
        if(count >= 4) {
            openCloseOverlay(1);
            overlayActive();
        }
    }
});

hoov.addEventListener('click', function() {
    openCloseOverlay(2);
    overlayActive();
});

bottom.addEventListener('click', function() {
    openCloseOverlay(3);
    overlayActive();   
});

// inputAfter.addEventListener('click', function() {
//     inputAfter.style.after = 
//     "content: ''; " +
//     "position: absolute; " +
//     "display: block; " +
//     "width: 100px; " +
//     "height: 2px; " +
//     "bottom: 0; " +
//     "left: 0; " +
//     "background-color: red;";
// });

// вставка заголовка и ответов
function openCloseOverlay(number) {
    let answerCount = 0;
    overlayQuestion.innerHTML = questions.title[number];

    questions.answers[number].forEach(function(item) {
        answer[answerCount].innerHTML = item;
        answerCount++;
    });
}
function overlayActive() {
    overlay.classList.toggle('overlay_active');
}
function moonActive() {
    moon.style.cssText = "left: 150px; "+
        "transform: rotate(120deg); "+
        "transition: all 0.9s;";
    setTimeout(moonDown, 700);
}
function moonDown() {
    moon.style.top = "100vh";
    setTimeout(() => moon.style.display = "none", 420);
}