let hourel = document.querySelector('#hour');
let minuteel = document.querySelector('#minutes');
let secondel = document.querySelector('#seconds');
let ampmel = document.querySelector('#ampm');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM'

    if (h > 12) {
        h = h - 12;
        ampm = 'PM';
    }

    hourel.textContent = h;
    minuteel.textContent = m;
    secondel.textContent = s;
    ampmel.textContent = ampm;

    setTimeout(updateClock, 1000);
}

updateClock()