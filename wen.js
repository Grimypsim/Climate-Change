document.addEventListener("DOMContentLoaded", function() {
    const exploreBtn = document.querySelector('.join-btn');
    exploreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => window.location.href = this.getAttribute("href"), 800);
    });
});