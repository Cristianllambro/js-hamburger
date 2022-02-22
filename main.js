let iconHamb = document.querySelector('.fa-bars')
let menuHamb = document.querySelector('.hamburger-menu');
let iconTime = document.querySelector('.fa-times')

iconHamb.addEventListener('click', function() {
    menuHamb.classList.add('active')
})

iconTime.addEventListener('click', function() {
    menuHamb.classList.remove('active')
})


