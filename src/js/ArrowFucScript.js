let IS_DARK_MODE = false;
const WHITE_ARROW = document.querySelector('.white_arrow');
const DARK_ARROW = document.querySelector('.dark_arrow');
const BODY = document.body;

function init() {
    WHITE_ARROW.addEventListener('click', () => {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: BODY.offsetTop,
        });
    });
    IS_DARK_MODE = !IS_DARK_MODE;
    if (IS_DARK_MODE === false) {
        WHITE_ARROW.addEventListener('click', () => {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: BODY.offsetTop,
            });
        });
    } else {
        DARK_ARROW.addEventListener('click', () => {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: BODY.offsetTop,
            });
        });
    }
}
init();
