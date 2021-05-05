const body = document.body;
const currentJobPeriod = document.querySelectorAll('.currentJobPeriod');
const totalCareer = document.querySelector('.totalCareer');
const TOP_Allow = document.querySelector('.top_allow');
const DARK_TOGGLE = document.querySelector('.dark_toggle');
const DARK_AllOW = document.querySelector('.dark_allow');
const CONTENTS = document.querySelector('.contents');
const SECTION = document.querySelectorAll('section');
const LITTLE_TITLE = document.querySelectorAll('.little_title');
let IS_DARK_MODE = false;

const ALLOW_START_OFFSETY_RATIO = 0.6;
const ALLOW_END_OFFSETY_RATIO = 0.7;

const INNER_HEIGHT = window.innerHeight;
const WEB_PAGE_TOTAL_HEIGHT = body.scrollHeight;
const ALLOW_START_OFFSETY = WEB_PAGE_TOTAL_HEIGHT * ALLOW_START_OFFSETY_RATIO;
const ALLOW_END_OFFSETY = WEB_PAGE_TOTAL_HEIGHT * ALLOW_END_OFFSETY_RATIO;

const SECTION1_START_Y_PX = SECTION[0].clientHeight + 120;
const SECTION2_START_Y_PX = SECTION1_START_Y_PX + SECTION[1].clientHeight + 100;
const SECTION3_START_Y_PX = SECTION2_START_Y_PX + SECTION[2].clientHeight + 100;
const SECTION4_START_Y_PX = SECTION3_START_Y_PX + SECTION[3].clientHeight + 120;
const SECTION_START_Y_PX = [SECTION1_START_Y_PX, SECTION2_START_Y_PX, SECTION3_START_Y_PX, SECTION4_START_Y_PX, WEB_PAGE_TOTAL_HEIGHT];

function init() {
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
        scrollReactContents();
    });

    TOP_Allow.addEventListener('click', () => {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: body.offsetTop,
        });
    });

    LITTLE_TITLE.forEach((element, index) => {
        element.addEventListener('click', () => {
            scrollTo(0, SECTION_START_Y_PX[index] + 10);
        });
    });

    DARK_TOGGLE.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        IS_DARK_MODE = !IS_DARK_MODE;
        if (IS_DARK_MODE === false) {
            TOP_Allow.addEventListener('click', () => {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: body.offsetTop,
                });
            });
        } else {
            DARK_AllOW.addEventListener('click', () => {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: body.offsetTop,
                });
            });
        }
    });
}

function scrollReactContents() {
    if (pageYOffset < 380) {
        CONTENTS.style.position = 'absolute';
        CONTENTS.style.top = '0px';
        LITTLE_TITLE.forEach((element, index) => {
            element.style.color = '#bdc3c7';
            element.style.transform = 'scale(1)';
            element.style.marginLeft = '0px';
        });
    } else {
        CONTENTS.style.position = 'fixed';
        CONTENTS.style.top = '100px';
        if (SECTION1_START_Y_PX < pageYOffset) {
            contentStyle(0);
            // Work Experience
        }
        if (SECTION2_START_Y_PX < pageYOffset) {
            contentStyle(1);
            // My Salad Project
        }
        if (SECTION3_START_Y_PX < pageYOffset) {
            contentStyle(2);
            // Alone Study
        }
        if (SECTION4_START_Y_PX < pageYOffset) {
            contentStyle(3);
            // Skill
        }
        if (WEB_PAGE_TOTAL_HEIGHT < pageYOffset + INNER_HEIGHT) {
            contentStyle(4);
            // Contact
        }
    }
}

function contentStyle(idx) {
    LITTLE_TITLE.forEach((element, index) => {
        if (index === idx) {
            if (IS_DARK_MODE === false) {
                element.style.color = '#222';
            } else {
                element.style.color = '#f7f1e3';
            }
            element.style.transform = 'scale(1.2)';
            element.style.marginLeft = '11px';
        } else {
            element.style.color = '#bdc3c7';
            element.style.transform = 'scale(1)';
            element.style.marginLeft = '0px';
        }
    });
}

function scrollReact() {
    if ((pageYOffset + INNER_HEIGHT) / WEB_PAGE_TOTAL_HEIGHT > ALLOW_START_OFFSETY_RATIO) {
        if (IS_DARK_MODE === false) {
            TOP_Allow.style.display = 'block';
            TOP_Allow.style.opacity = (pageYOffset + INNER_HEIGHT - ALLOW_END_OFFSETY) / (ALLOW_END_OFFSETY - ALLOW_START_OFFSETY);
        } else {
            DARK_AllOW.style.display = 'block';
            DARK_AllOW.style.opacity = (pageYOffset + INNER_HEIGHT - ALLOW_END_OFFSETY) / (ALLOW_END_OFFSETY - ALLOW_START_OFFSETY);
        }
    } else {
        if (IS_DARK_MODE === false) {
            TOP_Allow.style.display = 'none';
        } else {
            DARK_AllOW.style.display = 'none';
        }
    }
}

init();
