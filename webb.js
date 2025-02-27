document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', () => {
        document.body.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            window.location.href = 'chap2.html';
        }, 500);
    });
});

const style = document.createElement('style');
style.textContent = `
@keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(30px); }
}`;
document.head.appendChild(style);
