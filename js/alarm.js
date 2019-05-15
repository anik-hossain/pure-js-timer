// call a selector
var hour = document.querySelector('.h');
var minuites = document.querySelector('.m');
var screen1 = document.querySelector('.screen-1');
var screen2 = document.querySelector('.screen-2');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');

// Set value
var Vhour = document.querySelector('.h').value;
var Vminuites = document.querySelector('.m').value;

// Custom function
setInterval(function () {
    Vminuites--;
    if (Vminuites < 0) {
        Vminuites--;
        return false;
    }
}, 1000);

plus.addEventListener('click', function () {
    ;
    if (MouseEvent) {
        Vminuites++;
        screen2.innerHTML = Vminuites;
        if (Vminuites === 60) {
            Vminuites = 0;
            screen2.innerHTML = Vminuites;
            Vhour++;
            screen1.innerHTML = Vhour;
        }
    }
});