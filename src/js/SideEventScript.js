const LITTLE_TITLE = document.querySelectorAll('.little_title');

function init() {
    LITTLE_TITLE.forEach((element, index) => {
        element.addEventListener('click', () => {
            scrollTo(0, SECTION_START_Y_PX[index] + 10);
        });
    });
}

init();
