let IS_DARK_MODE = false;
const BODY = document.body;

const WHITE_ARROW = document.querySelector('.white_arrow');
const DARK_ARROW = document.querySelector('.dark_arrow');
const CONTENTS = document.querySelector('.contents_box');
const SECTION = document.querySelectorAll('section');
const BUTTON_COPY_EMAIL = document.querySelector('.contact_box');
const LITTLE_TITLE = document.querySelectorAll('.little_title');

const INNER_HEIGHT = window.innerHeight;
const WEB_PAGE_TOTAL_HEIGHT = BODY.offsetHeight;

const SECTION1_START_Y_PX = SECTION[0].clientHeight;
const WORK_EXPERIENCE = SECTION1_START_Y_PX + SECTION[1].clientHeight + 200;
const THE_BIG_CHALLENGE = WORK_EXPERIENCE + SECTION[2].clientHeight + 200;
const MY_SALAD_PROJECT = THE_BIG_CHALLENGE + SECTION[3].clientHeight + 100;
// const ALONE_STUDY = MY_SALAD_PROJECT + SECTION[4].clientHeight + 100;
// const SKILL = ALONE_STUDY + SECTION[5].clientHeight - 300;
const SECTION_START_Y_PX = [SECTION1_START_Y_PX, WORK_EXPERIENCE, THE_BIG_CHALLENGE, MY_SALAD_PROJECT, WEB_PAGE_TOTAL_HEIGHT];

const ARROW_START_OFFSETY_RATIO = 0.6;
const ARROW_END_OFFSETY_RATIO = 0.7;

const ARROW_START_OFFSETY = WEB_PAGE_TOTAL_HEIGHT * ARROW_START_OFFSETY_RATIO;
const ARROW_END_OFFSETY = WEB_PAGE_TOTAL_HEIGHT * ARROW_END_OFFSETY_RATIO;

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
        // if (ALONE_STUDY < pageYOffset) {
        //     contentStyle(4);
        //     // Skill
        // }
        if (WEB_PAGE_TOTAL_HEIGHT - 500 < pageYOffset) {
            contentStyle(3);
            // contentStyle(4);
            // Contact
        }
    }
}

function scrollReact() {
    if ((pageYOffset + INNER_HEIGHT) / WEB_PAGE_TOTAL_HEIGHT > ARROW_START_OFFSETY_RATIO) {
        if (IS_DARK_MODE === false) {
            WHITE_ARROW.style.display = 'block';
            WHITE_ARROW.style.opacity = (pageYOffset + INNER_HEIGHT - ARROW_END_OFFSETY) / (ARROW_END_OFFSETY - ARROW_START_OFFSETY);
        } else {
            DARK_ARROW.style.display = 'block';
            DARK_ARROW.style.opacity = (pageYOffset + INNER_HEIGHT - ARROW_END_OFFSETY) / (ARROW_END_OFFSETY - ARROW_START_OFFSETY);
        }
    } else {
        if (IS_DARK_MODE === false) {
            WHITE_ARROW.style.display = 'none';
        } else {
            DARK_ARROW.style.display = 'none';
        }
    }
}

function contentStyle(idx) {
    LITTLE_TITLE.forEach((element, index) => {
        if (index === idx) {
            if (IS_DARK_MODE === false) {
                element.style.color = 'black';
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

function init() {
    window.addEventListener('scroll', () => {
        scrollReact();
        scrollReactContents();
    });
}

init();
