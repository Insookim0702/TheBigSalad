import './css/animation.css';
import './css/darkMode.css';
import './css/index.css';
import './css/title_size.css';
import './img/dark_allow.png';
import './img/dark.png';
import './img/white.png';
import './img/white_allow.png';
import './img/github.png';
import './img/vue.png';
import './img/gitlab.png';
import './img/spring.png';
import './img/java.png';
import './img/javascript.png';
import './img/copy_icon.png';
const BODY = document.body;
const currentJobPeriod = document.querySelectorAll('.currentJobPeriod');
const totalCareer = document.querySelector('.totalCareer');
const WHITE_TOGGLE = document.querySelector('.white_toggle');
const DARK_TOGGLE = document.querySelector('.dark_toggle');
const WHITE_ALLOW = document.querySelector('.white_allow');
const DARK_ALLOW = document.querySelector('.dark_allow');
const CONTENTS = document.querySelector('.contents_box');
const SECTION = document.querySelectorAll('section');
const BUTTON_COPY_EMAIL = document.querySelector('.contact_box');
const LITTLE_TITLE = document.querySelectorAll('.little_title');
let IS_DARK_MODE = false;

const ALLOW_START_OFFSETY_RATIO = 0.6;
const ALLOW_END_OFFSETY_RATIO = 0.7;

const INNER_HEIGHT = window.innerHeight;
const WEB_PAGE_TOTAL_HEIGHT = BODY.offsetHeight;
const ALLOW_START_OFFSETY = WEB_PAGE_TOTAL_HEIGHT * ALLOW_START_OFFSETY_RATIO;
const ALLOW_END_OFFSETY = WEB_PAGE_TOTAL_HEIGHT * ALLOW_END_OFFSETY_RATIO;

const SECTION1_START_Y_PX = SECTION[0].clientHeight;
const WORK_EXPERIENCE = SECTION1_START_Y_PX + SECTION[1].clientHeight + 200;
const THE_BIG_CHALLENGE = WORK_EXPERIENCE + SECTION[2].clientHeight + 200;
const MY_SALAD_PROJECT = THE_BIG_CHALLENGE + SECTION[3].clientHeight + 100;
const ALONE_STUDY = MY_SALAD_PROJECT + SECTION[4].clientHeight + 100;
const SKILL = ALONE_STUDY + SECTION[5].clientHeight - 300;
const SECTION_START_Y_PX = [SECTION1_START_Y_PX, WORK_EXPERIENCE, THE_BIG_CHALLENGE, MY_SALAD_PROJECT, ALONE_STUDY, WEB_PAGE_TOTAL_HEIGHT];
const currentDate = new Date();
const wisenutPeriod = 17;
const brandiPeriod = 2;
const machbaseJobStartDate = new Date(2021, 1, 25);
const diffMonth = currentDate.getMonth() - machbaseJobStartDate.getMonth() + 1;
const diffYear = currentDate.getFullYear() - machbaseJobStartDate.getFullYear();

function calcTotalCareerPeriod() {
    const calcResultYear = `${Math.floor((wisenutPeriod + brandiPeriod + diffMonth) / 12) + diffYear + 1}`;
    const calcResultMonth = `${(wisenutPeriod + brandiPeriod + diffMonth) % 12 === 0 ? '' : `${(wisenutPeriod + brandiPeriod + diffMonth) % 12}개월`}`;
    totalCareer.innerText = `${calcResultYear}년 차`;
}

function init() {
    calcTotalCareerPeriod();
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

    WHITE_ALLOW.addEventListener('click', () => {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: BODY.offsetTop,
        });
    });

    LITTLE_TITLE.forEach((element, index) => {
        element.addEventListener('click', () => {
            scrollTo(0, SECTION_START_Y_PX[index] + 10);
        });
    });

    //화이트 모드
    DARK_TOGGLE.addEventListener('click', () => {
        DARK_TOGGLE.style.display = 'none';
        WHITE_TOGGLE.style.display = 'block';
        // none처리되어 있는 WHITE_TOGGLE요소를 block처리한 후에
        // 0.01초 뒤에 transition opacity 1을 실행
        setTimeout(() => {
            document.body.classList.toggle('dark');
        }, 10);

        IS_DARK_MODE = !IS_DARK_MODE;
        if (IS_DARK_MODE === false) {
            WHITE_ALLOW.addEventListener('click', () => {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: BODY.offsetTop,
                });
            });
        } else {
            DARK_ALLOW.addEventListener('click', () => {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: BODY.offsetTop,
                });
            });
        }
    });

    //다크 모드
    WHITE_TOGGLE.addEventListener('click', () => {
        WHITE_TOGGLE.style.display = 'none';
        DARK_TOGGLE.style.display = 'block';
        setTimeout(() => {
            document.body.classList.toggle('dark');
        }, 10);

        IS_DARK_MODE = !IS_DARK_MODE;
        if (IS_DARK_MODE === false) {
            WHITE_ALLOW.addEventListener('click', () => {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: BODY.offsetTop,
                });
            });
        } else {
            DARK_ALLOW.addEventListener('click', () => {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: BODY.offsetTop,
                });
            });
        }
    });

    BUTTON_COPY_EMAIL.addEventListener('click', () => {
        copyEmail();
    });
}

function copyEmail() {
    const email = document.querySelector('.email');
    email.select();
    const isCopy = document.execCommand('copy');
    if (isCopy === true) {
        alert('복사 되었습니다.');
    } else {
        alert('복사 실패');
    }
}

function scrollReactContents() {
    if (pageYOffset < SECTION1_START_Y_PX) {
        // CONTENTS.style.position = 'fixed';
        // CONTENTS.style.top = '470px';
        LITTLE_TITLE.forEach((element, index) => {
            element.style.color = '#bdc3c7';
            element.style.transform = 'scale(1)';
            element.style.marginLeft = '0px';
        });
    } else {
        // CONTENTS.style.position = 'fixed';
        // CONTENTS.style.top = '100px';
        if (SECTION1_START_Y_PX < pageYOffset) {
            contentStyle(0);
            // Work Experience
        }
        if (WORK_EXPERIENCE < pageYOffset) {
            contentStyle(1);
            // The Big Challenge
        }
        if (THE_BIG_CHALLENGE < pageYOffset) {
            contentStyle(2);
            // My Salad Project
        }
        if (MY_SALAD_PROJECT < pageYOffset) {
            contentStyle(3);
            // Alone Study
        }
        if (ALONE_STUDY < pageYOffset) {
            contentStyle(4);
            // Skill
        }
        if (WEB_PAGE_TOTAL_HEIGHT - 200 < pageYOffset) {
            contentStyle(5);
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
            WHITE_ALLOW.style.display = 'block';
            WHITE_ALLOW.style.opacity = (pageYOffset + INNER_HEIGHT - ALLOW_END_OFFSETY) / (ALLOW_END_OFFSETY - ALLOW_START_OFFSETY);
        } else {
            DARK_ALLOW.style.display = 'block';
            DARK_ALLOW.style.opacity = (pageYOffset + INNER_HEIGHT - ALLOW_END_OFFSETY) / (ALLOW_END_OFFSETY - ALLOW_START_OFFSETY);
        }
    } else {
        if (IS_DARK_MODE === false) {
            WHITE_ALLOW.style.display = 'none';
        } else {
            DARK_ALLOW.style.display = 'none';
        }
    }
}

init();
