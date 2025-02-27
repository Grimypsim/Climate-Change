document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const allNavLinks = document.querySelectorAll('.next-btn, .nav-btn');
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => window.location.href = link.getAttribute('href'), 800);
    });
});