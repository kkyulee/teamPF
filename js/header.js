const fnScrollY = () => {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const header = get('#header .inner');

        if (scrollY > 100) {
            header.classList.add('scroll_on')


        } else {
            header.classList.remove('scroll_on')
        }

    })
}

(() => {
    fnScrollY();
})();