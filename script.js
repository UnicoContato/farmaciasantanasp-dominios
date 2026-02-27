const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('shadow-md');
        header.style.background = 'rgba(255, 255, 255, 0.8)';
    } else {
        header.classList.remove('shadow-md');
        header.style.background = 'rgba(255, 255, 255, 0.4)';
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

const btnPrivacidade = document.getElementById('btn-privacidade');
const modalPrivacidade = document.getElementById('modal-privacidade');
const closeModalBtn = document.getElementById('close-modal');
const modalBg = document.querySelector('.modal-bg');

function toggleModal() {
    modalPrivacidade.classList.toggle('hidden');
    if (!modalPrivacidade.classList.contains('hidden')) {
        modalPrivacidade.style.opacity = '0';
        setTimeout(() => {
            modalPrivacidade.style.transition = 'opacity 0.3s ease';
            modalPrivacidade.style.opacity = '1';
        }, 10);
    }
}

btnPrivacidade.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
modalBg.addEventListener('click', toggleModal);