document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.main-nav');
    const navHeight = nav.offsetHeight;
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= navHeight) {
            nav.classList.remove('scrolled');
            return;
        }

        if (currentScroll > lastScroll) {
            // Scrolling down
            nav.style.opacity = '0';
        } else {
            // Scrolling up
            nav.style.opacity = '1';
        }

        lastScroll = currentScroll;
    });
});