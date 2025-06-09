(() => {
    getPage('/teamPF/kor/common/header.html', '#header');
    const BASE_URL = window.location.origin + "teamPF";
    const menu = document.querySelector(".menu");
    let html = `<li><a href="${BASE_URL}/kor/category/index.html">업무분야</a></li>
        <li><a href="${BASE_URL}/kor/member/index.html">구성원</a></li>
        <li><a href="${BASE_URL}/kor/mediacenter/index.html">미디어센터</a></li>
        <li><a href="${BASE_URL}/kor/people/index.html">인재영입</a></li>
        <li><a href="${BASE_URL}/kor/about/index.html">법인소개</a></li>`;
    menu.innerHTML = html;

    getPage('/teamPF/kor/common/footer.html', '#footer');

})();

