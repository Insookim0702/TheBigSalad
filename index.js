const ALLOW_START_OFFSETY_RATIO = 0.6;
const ALLOW_END_OFFSETY_RATIO = 0.7;
const body = document.body;
const topAllow = document.querySelector('.top_allow');
const INNER_HEIGHT = window.innerHeight;
const WEB_PAGE_TOTAL_HEIGHT = body.scrollHeight;
const ALLOW_START_OFFSETY = WEB_PAGE_TOTAL_HEIGHT * ALLOW_START_OFFSETY_RATIO;
const ALLOW_END_OFFSETY = WEB_PAGE_TOTAL_HEIGHT * ALLOW_END_OFFSETY_RATIO;

function init() {
    const currentJobPeriod = document.querySelectorAll('.currentJobPeriod');
    const totalCareer = document.querySelector('.totalCareer');
    const currentDate = new Date();
    const machbaseJobStartDate = new Date(2021, 1, 25);
    const wisenutPeriod = 15;
    const brandiPeriod = 2;
    const diffMonth = currentDate.getMonth() - machbaseJobStartDate.getMonth() + 1;
    const diffYear = currentDate.getFullYear() - machbaseJobStartDate.getFullYear();
    totalCareer.innerText = `${Math.floor((wisenutPeriod + brandiPeriod + diffMonth) / 12) + diffYear}년 ${(wisenutPeriod + brandiPeriod + diffMonth) % 12}개월`;

    currentJobPeriod.forEach((aItem) => {
        let period = '';
        if (diffYear > 0) {
            period += `${diffYear}Y`;
        }
        period += `${diffMonth}M`;
        aItem.innerText = period;
    });

    window.addEventListener('scroll', () => {
        scrollReact();
    });

    topAllow.addEventListener('click', () => {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: body.offsetTop,
        });
    });
}

function scrollReact() {
    if ((pageYOffset + INNER_HEIGHT) / WEB_PAGE_TOTAL_HEIGHT > ALLOW_START_OFFSETY_RATIO) {
        topAllow.style.display = 'block';
        topAllow.style.opacity = (pageYOffset + INNER_HEIGHT - ALLOW_END_OFFSETY) / (ALLOW_END_OFFSETY - ALLOW_START_OFFSETY);
    } else {
        topAllow.style.display = 'none';
    }
}

init();
