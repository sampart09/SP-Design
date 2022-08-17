let stars = document.getElementById('stars');
let planet = document.getElementById('planet');
let mountains = document.getElementById('mountains');
let meteor = document.getElementById('meteor');
let texts = document.getElementById('texts');
let btn = document.getElementById('btn');
let foreground = document.getElementById('foreground');
let header =document.querySelector('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    planet.style.top = value * 1.05 + 'px';
    mountains.style.top = value * 0.25 + 'px';
    meteor.style.marginTop = value * 2 + 'px';
    meteor.style.marginLeft = value * 3 + 'px';
    foreground.style.top = value * 0 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

})