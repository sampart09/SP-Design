let caveback = document.getElementById('caveback');
let moon = document.getElementById('cavemoon');
let entrance = document.getElementById('entrance');
let midground = document.getElementById('midground');
let caveforeground = document.getElementById('caveforeground');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    caveback.style.top = value * 0 + 'px';
    moon.style.top = value * 0.22 + 'px';
    entrance.style.top = value * 0 + 'px';
    midground.style.top = value * 0 + 'px';
    caveforeground.style.top = value * 0 + 'px';
    header.style.top = value * 0.5 + 'px';

})