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

function init() {
    BUTTON_COPY_EMAIL.addEventListener('click', () => {
        copyEmail();
    });
}
