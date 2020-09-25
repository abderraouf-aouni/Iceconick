let hamburger = document.querySelector('.toggler');
let nav = document.querySelector('nav')

hamburger.addEventListener('click', openNav);
Array.from(nav.children).forEach(itm => itm.addEventListener('click', closeNav))

function openNav() {
    nav.classList.toggle('nav-open')
    fillScreen()
}

function closeNav() {
    openNav();
    location.reload()
}

function fillScreen() {
    document.body.classList.toggle('flow-hidden')
}

let contactBtn = document.querySelectorAll('.Contact-btn');
let form = document.querySelector('form');
let clsBtn = document.querySelector('.fa-times-circle')
let header = document.querySelector('header');
let model = document.querySelector('.model');


contactBtn.forEach(itm => itm.addEventListener('click', showForm))

function showForm() {

    window.scrollTo(0, 0)

    header.classList.add('display-none')

    model.classList.add('open-form')


    window.addEventListener('click', closeForm)



    function closeForm(e) {
        console.log(e.target)
        if (e.target === clsBtn) {
            model.classList.remove('open-form')
            header.classList.remove('display-none')
            console.log('yooo')

        }

        if (e.target == model) {

            model.classList.remove('open-form')
            header.classList.remove('display-none')
        }








    }
}



let goTopBtn = document.querySelector('.go-top');
let franchisers = document.querySelector('.franchisers');
let truck = document.querySelector('.truck');

window.addEventListener('scroll', scrol)

function scrol() {

    if (model.classList.contains('open-form'))
        if (window.innerWidth < 1100) {

            document.querySelector('form .container').style.transform = `translateY(-${window.scrollY / 6}px)`
        }
    if (window.scrollY > franchisers.offsetTop) {
        goTopBtn.classList.add('show-top-btn');
        console.log('yooo')
    } else {
        goTopBtn.classList.remove('show-top-btn');
    }
    if (window.scrollY > franchisers.offsetTop - 500) {
        franchisers.classList.add('aftr-scrl');
    }
    if (window.scrollY > truck.offsetTop - 500) {
        truck.classList.add('aftr-scrl');
    }

}

