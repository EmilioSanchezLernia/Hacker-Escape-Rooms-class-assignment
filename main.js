
const menu = document.querySelector('.menu');

document.querySelector('.hamburgerMenu').addEventListener('click', function () {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})

document.querySelector('.closeOverlay').addEventListener('click', function () {
    menu.classList.add('hidden')
})