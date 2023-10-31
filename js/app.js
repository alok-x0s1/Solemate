// Toggle active button
const slideNavigator = name => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide => {
        slide.classList.remove('active');

        if(slide.classList.contains(name)) {
            slide.classList.add('active');
        }
    });
};

// Switch Background
window.addEventListener('load', () => {
    const slideBtnList = document.querySelectorAll('.slide-btn');

    slideBtnList.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            slideBtnList.forEach(el => {
                el.classList.remove('active');
            });

            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
});


// Activate Section
const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
        section.classList.remove('section-show');
        if (section.classList.contains(name)) {
            section.classList.add('section-show');
            header.classList.add('active');
        }
    });
};

// Navigation to Sections 
window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(nav => {
        nav.addEventListener('click', function(e) {
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
});

// Reset header to initial state
const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active')
}

// Initial navigation
const initialNavigation = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'about') {
            el.classList.add('active');
        }
    });
    sectionNavigator('about');
};

// toggle menu
const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}