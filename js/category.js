const navItems = document.querySelectorAll('.nav-item');
const closeAllBtn = document.querySelector('.btn1');

navItems.forEach((item) => {
    const toggleBtn = item.querySelector('.fold');
    const navList = item.querySelector('.nav-list');

    toggleBtn.addEventListener('click', () => {
        const icon = toggleBtn.querySelector('i');
        const isVisible = navList.classList.contains('show');

        if (isVisible) {
            navList.classList.remove('show');
            icon.classList.remove('xi-angle-up');
            icon.classList.add('xi-angle-down');
        } else {
            navList.classList.add('show');
            icon.classList.remove('xi-angle-down');
            icon.classList.add('xi-angle-up');
        }
    });
});

closeAllBtn.addEventListener('click', () => {
    navItems.forEach((item) => {
        const navList = item.querySelector('.nav-list');
        const icon = item.querySelector('.fold i');

        navList.classList.remove('show');
        icon.classList.remove('xi-angle-up');
        icon.classList.add('xi-angle-down');
    });
});
