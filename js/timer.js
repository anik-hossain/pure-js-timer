// call selectors;
var hour = document.querySelector('.hour');
var minuites = document.querySelector('.minuites');
var seconds = document.querySelector('.seconds');
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
// set value;
s = '0' + 0
m = '0' + 0;
h = '0' + 0;
// 
seconds.innerHTML = s;
minuites.innerHTML = m + ' :';
hour.innerHTML = h + ' :';
// Custom timer function;
setInterval(function () {
    s++;
    seconds.innerHTML = s;
    if (s < 10) {
        seconds.innerHTML = '0' + s;
    }
    if (s === 60) {
        s = 0;
        seconds.innerHTML = s;
        m++;
        minuites.innerHTML = m + ' :';
        if (m < 10) {
            minuites.innerHTML = '0' + m + ':';
        }
        if (m === 60) {
            m = 0;
            minuites.innerHTML = m;
            h++;
            hour.innerHTML = h + ' :';
            if (h < 10) {
                hour.innerHTML = '0' + h + ':';
            }
            if (h === 24) {
                h = 0;
                hour.innerHTML = h + ' :';
                h++;
                hour.innerHTML = h + ' :';
            }
        }
    };
}, 1000);