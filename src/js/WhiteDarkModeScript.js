const WHITE_TOGGLE = document.querySelector('.white_toggle');
const DARK_TOGGLE = document.querySelector('.dark_toggle');

function init() {
    //화이트 모드
    DARK_TOGGLE.addEventListener('click', () => {
        DARK_TOGGLE.style.display = 'none';
        WHITE_TOGGLE.style.display = 'block';
        // none처리되어 있는 WHITE_TOGGLE요소를 block처리한 후에
        // 0.01초 뒤에 transition opacity 1을 실행
        setTimeout(() => {
            document.body.classList.toggle('dark');
        }, 10);
    });

    //다크 모드
    WHITE_TOGGLE.addEventListener('click', () => {
        WHITE_TOGGLE.style.display = 'none';
        DARK_TOGGLE.style.display = 'block';
        setTimeout(() => {
            document.body.classList.toggle('dark');
        }, 10);
    });
}

init();
