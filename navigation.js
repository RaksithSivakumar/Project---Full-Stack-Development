document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const indicator = document.querySelector('.indicator');

    function updateIndicator(element) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => item.classList.remove('active'));
        const parent = element.parentElement;
        parent.classList.add('active');

        const index = Array.from(navLinks).indexOf(element);
        indicator.style.setProperty('--indicator-pos', index);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            updateIndicator(e.target);
        });
    });

    updateIndicator(navLinks[0]);
});
