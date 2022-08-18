let sky = document.getElementById('sky');
let caveback = document.getElementById('caveback');
let moon = document.getElementById('cavemoon');
let meteor = document.getElementById('meteor');
let entrance = document.getElementById('entrance');
let midground = document.getElementById('midground');
let caveforeground = document.getElementById('caveforeground');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    sky.style.left = value * 0.1 + 'px';
    caveback.style.top = value * 0.04 + 'px';
    moon.style.top = value * 0.3 + 'px';
    meteor.style.marginTop = value * 0.07 + 'px';
    meteor.style.marginLeft = value * 0.4 + 'px';
    entrance.style.top = value * 0 + 'px';
    midground.style.top = value * 0 + 'px';
    caveforeground.style.top = value * 0 + 'px';
    header.style.top = value * 0.5 + 'px';

})