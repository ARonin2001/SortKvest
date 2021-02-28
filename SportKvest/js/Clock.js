'use strict'

let clocks = document.querySelector('.clock');

let sec = 0,
    min = 0;

function seconds() {
    if(!user.getCheckPassword()) {
        if(sec < 60) {
            if(min < 60) {
                clocks.innerHTML = ((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec);
                sec++;
            }
        } else {
            min++;
            sec = 0;
        } 
        
        setTimeout(seconds, 1000);
    }
}

seconds();