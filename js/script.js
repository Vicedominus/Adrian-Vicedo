
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
});

sr.reveal('.home-text', {delay:120, origin:'left'})

const more = document.querySelector('.more');
const moreBtn = document.querySelector('#more-btn');

moreBtn.onclick = () => {
    more.classList.toggle('more-show');
}

document.querySelectorAll('.col img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = image.getAttribute('src');
    } 
})

document.querySelector('.pop-up span').onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
}