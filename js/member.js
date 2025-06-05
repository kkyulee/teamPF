const selectBox = document.querySelector('select');

selectBox.addEventListener('focus', (e) => {
    selectBox.classList.add('on');
});

selectBox.addEventListener('blur', (e) => {
    selectBox.classList.remove('on');
});

const input = document.querySelector('#search');

input.addEventListener('focus', (e) => {
    input.classList.add('on');
});

input.addEventListener('blur', (e) => {
    input.classList.remove('on');
});

// const btn1 = document.querySelector('btn1');
// btn1.addEventListener('click', (e) => {});
