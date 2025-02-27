document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector(".back-btn");

    if (backButton) {
        backButton.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.style.transition = "opacity 0.3s ease";
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = "chap2.html";
            }, 300);
        });
    }

    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.3s ease";
        document.body.style.opacity = "1";
    }, 100);
});
