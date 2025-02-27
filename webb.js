document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-btn, .next-btn");
    
    navButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const targetUrl = this.getAttribute("href");

            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    const infoSection = document.querySelector(".info-section");

    function fadeInInfo() {
        const sectionTop = infoSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            infoSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", fadeInInfo);
    fadeInInfo();
});
