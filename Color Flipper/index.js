let button = document.querySelector('.btn');
let header = document.querySelector('.header');
let span = document.querySelector('.colorcode');

button.addEventListener('click', () => {
    let color = randomcolor();
    span.textContent = color;
    document.body.style.backgroundColor = color;
    header.style.backgroundColor = 'beige'
})

function randomcolor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`
}