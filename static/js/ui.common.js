const initGnb = () => {
    const gnb = document.querySelector('.gnb__list');
    if (gnb) {
        const items = gnb.querySelectorAll('.gnb__item');
        items.forEach(el => {
            el.addEventListener('click', () => {
                items.forEach(item => item.parentNode.classList.remove('is-active'));
                el.parentNode.classList.add('is-active');
            });
        });
    }
};

window.onload = () => {
    initGnb();
};