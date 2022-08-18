let volcano = document.getElementById('volcano');


window.addEventListener('scroll', function () {
    let value = window.scrollY;
    volcano.style.bottom = value * 0 + 'px';
})