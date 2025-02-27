document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector(".back-btn");

    if (backButton) {
        backButton.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = "chap2.html";
            }, 300);
        });
    }

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
