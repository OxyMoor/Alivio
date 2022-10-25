const navBtn = document.querySelector('.nav-open-btn');
const navBtnImg = document.querySelector('.nav-btn-img');
const nav = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = './img/header/close-menu-btn.svg'
    } else {
        navBtnImg.src = './img/header/open-menu-btn.svg'
    }
});

// animation
AOS.init({
    disable: 'phone',
    once: true,
});