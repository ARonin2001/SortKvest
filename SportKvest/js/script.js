'use strict'

if(window.innerWidth < 1365) {
    document.querySelector('.wrapp').style.display = "none";
    const mobile = document.querySelector('.mobile');
    mobile.classList.add('mobile_active');
}

let wrapp = document.querySelector('.wrapp'),
    humanIMG = document.querySelector('.human_img'),
    win = document.querySelector('.window'),
    overlay = document.querySelector('.overlay'),
    closeSpan = document.querySelector('.overlay__close'),
    overlayQuestion = document.querySelector('.overlay__label'),
    answer = document.querySelectorAll('.overlay__answer'),
    moon = document.querySelector('.moon__img'),
    moonClock = document.querySelector('.moon__clock'),
    bookIMG = document.querySelector('.book img'),
    ballIMG = document.querySelector('.ball__img'),
    hoov = document.querySelector('.hoov'),
    bottom = document.querySelector('.bottom'),
    btnForm = document.querySelectorAll('.btn'),
    parol = document.querySelector('#parol'),
    form = document.querySelector('.form'),
    inputAfter = document.querySelector('.form__input_after'),
    advice = document.querySelector('.overlay__advice'),
    overlayClock = document.querySelector('.overlay__clock span');


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
let userPassword, countAnswer = 0;

let user = new Password(userPassword, password);

humanIMG.addEventListener('click', function() {
    console.log("sdfsdf");
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

moonClock.addEventListener('click', function() {
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

btnForm[0].addEventListener('click', checkUserPassword);

btnForm[1].addEventListener('click', function() {
    if(confirm("Вы действительно хотите начать по новой?")) {
        location.reload();
    }
});

form.addEventListener('keydown', function(event) {
    if(event.code == 'Enter') {
        event.preventDefault();
        checkUserPassword();
    }
});

function checkUserPassword() {
    userPassword = parol.value;

    if(userPassword != "" && userPassword.length == 7) {
        user = new Password(userPassword, password);
        const clock = document.querySelector('.clock');
        
        if(user.getCheckPassword()) {
            overlay.firstElementChild.classList.add('overlay__block_active');
            overlay.childNodes[3].classList.remove('overlay__block_active');
            overlayClock.innerHTML = clock.innerHTML;
            document.querySelector('.overlay__try span').innerHTML = (countAnswer == 0 ? 1 : countAnswer);

            overlay.style.pointerEvents = "none";
            overlay.childNodes[3].style.pointerEvents = "auto";
            wrapp.style.pointerEvents = "none";
        } 
    } else if(userPassword != "") {
        countAnswer++;
    }
}

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