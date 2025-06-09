
const arrBanner = [
    { id: 1, img: `${BASE_URL}/images/banner/1.jpg`, title: '법무법인(유) 세종, ‘Benchmark Litigation Asia-Pacific Awards 2024’에서 ‘Impact Case of the Year’ 등 수상', content: '법무법인(유) 세종(이하 ‘세종’)이 ‘Benchmark Litigation Asia-Pacific Awards 2024’에서 ‘Impact Case of The Year(올해의 영향력 있는 사건)’을 수상하는 영예를 안았습니다.' },
    { id: 2, img: `${BASE_URL}/images/banner/2.jpg`, title: '법법무법인(유) 세종, GCR awards 2025 ‘올해의 아태지역 기업결합상’ 수상', content: '법무법인(유) 세종이 저명한 공정거래 분야 전문저널인 GCR(Global Competition Review)이 수여하는 ‘올해의 아태지역 기업결합상(Merger Control Matter of the Year: Asia Pacific, Middle East and Africa)’을 수상하는 영예를 안았습니다.' },
    { id: 3, img: `${BASE_URL}/images/banner/3.jpg`, title: '오종한 대표변호사, ALB ‘올해의 북아시아지역 소송 전문 변호사 15인’ 선정', content: '법무법인(유) 세종의 오종한 대표변호사가 ALB(Asian Legal Business) ‘올해의 북아시아 소송 전문 15대 변호사(North Asia Top 15 Litigators)’에 선정되는 영예를 안았습니다.' },
    { id: 4, img: `${BASE_URL}/images/banner/4.jpg`, title: '법무법인(유) 세종, 2024 대한민국 베스트 로펌&로이어 평가에서 서비스 부문 대상 등 수상', content: '법무법인(유) 세종이 한경비즈니스, 한국경제신문, 한국사내변호사회가 공동으로 주관한 ‘2024 대한민국 베스트 로펌&로이어’에서 서비스 부문 대상을 수상하는 영광을 안았습니다.' },
    { id: 5, img: `${BASE_URL}/images/banner/5.jpg`, title: '법무법인(유) 세종, 2024 ALB 한국법률대상에서 ‘올해의 분쟁해결 변호사’ 등 3개 부문 수상', content: '2024 ALB 한국법률대상에서 세종의 박영석 변호사(사법연수원 34기)가 ‘올해의 분쟁해결 변호사(Dispute Resolution Lawyer of the Year)’로 선정되었습니다. 또한 ‘올해의 채권시장 딜(Debt Market Deal of the Year)’, ‘올해의 주식시장 딜(Equity Market Deal of the Year)’에 선정되며 총 3개 부문을 수상하는 영예를 안았습니다.' }
];
const arrNotice = [
    {
        title: "세미나",
        context: "AI와 마이데이터의 현재와 미래 세미나 성료",
        date: "2025.06.02"
    },
    {
        title: "언론보도",
        context: "세종, '프로젝트 리츠 TF' 발족… 리츠법 개정 대응",
        date: "2025.05.26"
    },
    {
        title: "수상/위촉",
        context: "법무법인(유) 세종, ‘Benchmark Asia-Pacific Awards 2025’에서 변옥숙, 김재희 변호사 선정",
        date: "2025.05.23"
    },
    {
        title: "언론보도",
        context: "법무법인 세종, '방위산업 핵심이슈 세미나' 오는 28일 개최",
        date: "2025.05.20"
    },
    {
        title: "언론보도",
        context: "법무법인 세종, 'AI와 마이데이터의 현재와 미래' 세미나 성료",
        date: "2025.05.16"
    },
    {
        title: "세미나",
        context: "‘상장폐지 제도 개편에 따른 선제적 대응전략’ 세미나 성료",
        date: "2025.05.15"
    }
];

const arrYoutube = [
    { url: 'https://www.youtube.com/embed/JTx_9XdUkV8', img: "https://www.shinkim.com/upload_files/image//2025/5f51afa9486642b29032208c920557b3.jpg", title: "종 변호사의 하루 Vlog ｜대형로펌 어쏘 변호사는 어떤 하루를 보낼까? 🔎💼🌃 ｜ #룸투어 #변호사 #직장인브이로그 #법무법인세종" },
    { url: 'https://www.youtube.com/embed/zxbzgIiinJA', img: "https://www.shinkim.com/upload_files/image//2025/82311370bd965cbd63bee997014fedaa.jpg", title: "[법무법인(유) 세종] 판교 분사무소 확장 이전" },
    { url: 'https://www.youtube.com/embed/vcu2l_t7rz4', img: "https://www.shinkim.com/upload_files/image/2021/19aa394145938cb1586ad46c19439624.jpg", title: "허경환과 함께하는 법무법인(유) 세종 탐방" },
];

const arrExample = [
    { img: "/teamPF/images/example/img1.jpg", title: "건설 분쟁", context: "감정결과를 반영하여 철근량 증가에 관한 추가공사비를 인정한 제1심 판단을, 항소심에서 감정결과의 부당성을 적극적으로 주장, 증명하여 번복시킨 사례" },
    { img: "/teamPF/images/example/img2.jpg", title: "노동 분쟁", context: "영업이익 목표가 달성되는 경우 지급되는 성과급에 대하여 영업손실이 발생한 경우에는 이를 지급할 의무가 없다는 판단을 받은 사례" },
    { img: "/teamPF/images/example/img3.jpg", title: "노동 분쟁", context: "임기 만료 전 해임된 이사가 회사를 상대로 제기한 손해배상청구 소송에서 일부 인용판결을 받은 사례" }
];

const bannerSwiper = getAll('.control-nav li a');
const slider = get('.slider')
const sliders = get('.sliders')
const sliderlist = getAll('.slider li');
let bannerIdx = 0, currentWidth = 500, interval = 5000, timer = null;

const fnCreateBanner = () => {

    for (let i = 0; i < 3; i++) {
        arrBanner.forEach(({ img, title, content }, idx) => {
            const banner = document.createElement('li');
            banner.innerHTML = `
                  <div class="img-container">
                    <a href=""><img src="${img}" alt="" /></a>
                  </div>
                  <div class="text-container">
                    <div class="hedline">
                      <a href="#"><strong
                        >${title}</strong></a>
                      
                    </div>
    
                    <div class="content">
                      <p>
                        ${content}
                      </p>
                    </div>
                  </div>
                `;
            sliders.append(banner);
        });
    }
    sliders.style.transition = 'none';
    sliders.style.transform = `translateX(-${currentWidth}%)`;


}

const fnClickNext = () => {

    const next = get('.right .flex-next');

    next.addEventListener('click', () => {
        moveBanner('next');

        clearInterval(timer);
        autoSlideBanner();
    });
};

const fnClickPrev = () => {
    const prev = get('.left .flex-prev');
    prev.addEventListener('click', () => {
        moveBanner('prev');

        clearInterval(timer);
        autoSlideBanner();
    });
};

const moveBanner = (type) => {
    if (type === 'next') {
        bannerIdx++;
        sliders.style.transition = 'transform 0.5s ease-in-out';
        sliders.style.transform = `translateX(-${(bannerIdx * 100) + currentWidth}%)`;

        if (bannerIdx > arrBanner.length) {
            sliders.style.transition = 'none';
            sliders.style.transform = `translateX(-${currentWidth}%)`;
            bannerIdx = 0;
        }

        // slide nav 설정
        fnSlideNavSetup();
    } else {
        bannerIdx--;
        sliders.style.transition = 'transform 0.5s ease-in-out';
        sliders.style.transform = `translateX(-${(bannerIdx * 100) + currentWidth}%)`;

        if (bannerIdx < 0) {

            sliders.style.transition = 'none';
            sliders.style.transform = `translateX(-${currentWidth * 2}%)`;
            bannerIdx = 5;
        }
        // slide nav 설정
        fnSlideNavSetup();
    }
}

const fnSlideNavSetup = () => {
    const navs = getAll('.control-nav li a');
    navs.forEach((item) => {
        item.classList.remove('flex-active');
    })

    navs[bannerIdx].classList.add('flex-active');
};

const autoSlideBanner = () => {
    timer = setInterval(() => {
        moveBanner('next');
    }, interval);
};

const fnCreateNotice = () => {
    // 세종소식 목록 생성
    const postList = get('#section1 .inner .post-list');
    let html = '';
    arrNotice.forEach(({ title, context, date }, idx) => {
        const li = document.createElement('li');
        html = `
                <strong>${title}</strong>
                <a href="#">${context}</a>
                <span class="date">${date}</span>
              `;
        li.innerHTML = html;
        postList.append(li);
    })
};

const fnCreateYoutube = () => {
    const videoList = get('#section2 .inner .video-list');
    let html = '';
    arrYoutube.forEach(({ title, img, url }) => {
        const li = document.createElement('li');
        html = `<div class="post-container">
                  <div class="post-media">
                    <a href="${url}" target="_blank" class="thumbnail">
                        <img src="${img}" alt="" title="표지 이미지" class="image">   
                    </a> 
                  </div>
                  <div class="post-prime">
                    <div class="post-head">
                      <p class="post-name">
                        <a href="${url}" target="_blank" class="text">
                          <span class="wbr">${title}</span> 
                        </a> 
                      </p>
                    </div> 
                  </div>
                </div>`;
        li.innerHTML = html;
        videoList.append(li);
    })
};

const fnCreateExample = () => {
    const exampleList = get('#section3 .inner .example-list');
    let html = '';
    arrExample.forEach(({ title, context, img }, idx) => {
        const li = document.createElement('li');
        html = `
                  <div class="example-img">
                  <a href="#">
                    <img src="${img}" alt="">
                  </a>
                </div>
                <div class="example-text">
                  <strong>${title}</strong>
                  <p><a href="#" class="text">${context}</a></p>
                </div>
              `;
        li.innerHTML = html;
        exampleList.append(li);
    })
}

const fnScrollEvent = () => {

    const bannerH = parseInt(getComputedStyle(get('#banner')).height);
    const section1 = parseInt(getComputedStyle(get('#section1')).height);
    const section2 = parseInt(getComputedStyle(get('#section2')).height);
    const section3 = parseInt(getComputedStyle(get('#section3')).height);
    const section4 = parseInt(getComputedStyle(get('#section4')).height);
    const controls = getAll('.control a');
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY
        if (scrollY < bannerH) {
            controls.forEach((item) => {
                item.classList.remove('current');
            });
            controls[0].classList.add('current');
        } else if (scrollY < (bannerH + section1)) {

            controls.forEach((item) => {
                item.classList.remove('current');
            });
            controls[1].classList.add('current');
        } else if (scrollY < (bannerH + section1 + section2)) {

            controls.forEach((item) => {
                item.classList.remove('current');
            });
            controls[2].classList.add('current');
        } else if (scrollY < (bannerH + section1 + section2 + section3)) {

            controls.forEach((item) => {
                item.classList.remove('current');
            });
            controls[3].classList.add('current');
        }
        else if (scrollY < (bannerH + section1 + section2 + section3 + section4)) {

            controls.forEach((item) => {
                item.classList.remove('current');
            });
            controls[4].classList.add('current');
        }
    })


}

const fnSetHeaderMenu = () => {
    const BASE_URL = window.location.origin + "/teamPF";
    const menu = document.querySelector(".menu");
    let html = `<li><a href="${BASE_URL}/kor/category/index.html">업무분야</a></li>
        <li><a href="${BASE_URL}/kor/member/index.html">구성원</a></li>
        <li><a href="${BASE_URL}/kor/mediacenter/index.html">미디어센터</a></li>
        <li><a href="${BASE_URL}/kor/people/index.html">인재영입</a></li>
        <li><a href="${BASE_URL}/kor/about/index.html">법인소개</a></li>`;

    console.log()
    menu.innerHTML = html;
}
(() => {

    fnCreateBanner();
    fnClickNext();
    fnClickPrev();
    autoSlideBanner();

    fnCreateNotice();
    fnCreateYoutube();
    fnCreateExample();

    fnScrollEvent();

    fnSetHeaderMenu();
})();