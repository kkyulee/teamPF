const get = (target) => { return document.querySelector(target) }
const getAll = (target) => { return document.querySelectorAll(target) }
const getPage = (src, tag) => {
    fetch(src)
        .then(res => res.text())
        .then((res) => {

            get(tag).innerHTML = res;
        })
}