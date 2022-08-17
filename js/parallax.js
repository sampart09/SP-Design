let planet = document.getElementById('sun');
let mountains = document.getElementById('mountains');
let texts = document.getElementById('texts');
let btn = document.getElementById('btn');
let foreground = document.getElementById('foreground');
let header =document.querySelector('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    planet.style.top = value * 1.05 + 'px';
    mountains.style.top = value * 0.25 + 'px';
    foreground.style.top = value * 0 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

})