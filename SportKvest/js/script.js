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
    inputAfter = document.querySelector('.form__input_after'),
    advice = document.querySelector('.overlay__advice');


let sizeWindow = document.innerHTML = screen.width; // get size window

let questions = {
    title: ["1. В каком году был изобретён баскетбол?", 
    "2. Техника владения мячом включает в себя один из следующих приемов:", 
    "3. Высота корзины?", 
    "4. Размер игровой площадки?", 
    "5. Сколько длится баскетбольный матч?", 
    "6. Основатель баскетбола?", 
    "7. Кол-во игроков на поле одной команды в баскетболе?"],
    answers: [
        ["1900", "1891", "1872", "1723"],
        ["Развороты", "Остановки", "Передача", "Ловлю"],
        ["3,05м", "4м", "3,02м", "2,5м"],
        ["71Х34", "25Х15", "30Х21", "28Х15"],
        ["1-2 часа", "48 минут", "3 часа", "30 минут"],
        ["Оливер Твист", "Майкл Джексон", "Джеймс Нейсмит", "Джон Смит"],
        ["5", "7", "11", "10"]
    ]
};

let count = 0;
const password = "2314231";
let userPassword;

humanIMG.addEventListener('click', function() {
    form.classList.remove('form_active');
    advice.classList.add('overlay__advice_active');
    openCloseOverlay(6);
    overlayActive();
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
    openCloseOverlay(4);
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
        if(sizeWindow <= 1366) {
            if(count == 3) {
                ballIMG.style.cssText = "left: -15.2em; " +
                "top: 28rem; " +
                "transition: all .2s";
            }
            if(count >= 4) {
                openCloseOverlay(1);
                overlayActive();
            }
        } else {
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

btnForm.addEventListener('click', function() {
    userPassword = parol.value;

    if(userPassword != "" && userPassword.length == 7) {
        const user = new Password(userPassword, password);
        user.checkPassword();
    }
});

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
    if(!overlay.classList.contains('overlay_active')) {
        form.classList.add('form_active');
        advice.classList.remove('overlay__advice_active');
    }
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