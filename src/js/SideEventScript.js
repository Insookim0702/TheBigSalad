const BODY = document.body;
const LITTLE_TITLE = document.querySelectorAll('.little_title');
const SECTION = document.querySelectorAll('section');
const WEB_PAGE_TOTAL_HEIGHT = BODY.offsetHeight;

const SECTION1_START_Y_PX = SECTION[0].scrollHeight;
const WORK_EXPERIENCE = SECTION1_START_Y_PX + SECTION[1].scrollHeight;
const THE_BIG_CHALLENGE = WORK_EXPERIENCE + SECTION[2].scrollHeight + 900;
const SKILLS = THE_BIG_CHALLENGE + SECTION[3].scrollHeight;
const SECTION_START_Y_PX = [SECTION1_START_Y_PX, WORK_EXPERIENCE, THE_BIG_CHALLENGE, SKILLS, WEB_PAGE_TOTAL_HEIGHT];

function init() {
    LITTLE_TITLE.forEach((element, index) => {
        element.addEventListener('click', () => {
            scrollTo(0, SECTION_START_Y_PX[index] + 10);
        });
    });
}

init();
