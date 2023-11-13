
const menu = document.querySelector('.menu');

document.querySelector('.hamburgerMenu').addEventListener('click', function () {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        document.querySelector('body').classList.add('noScroll')
    } else {
        menu.classList.add('hidden')
        document.querySelector('body').classList.remove('noScroll')
    }
})

document.querySelector('.closeOverlay').addEventListener('click', function () {
    menu.classList.add('hidden')
    document.querySelector('body').classList.remove('noScroll')
})