const articleTitles = document.querySelectorAll('.article_title');
const articles = document.querySelectorAll('article');
const MODAL = document.querySelector('.modal');
const MODAL_IMG = document.querySelector('.modal_img');
let CURRENT_ARTICLE = -1;

function clickModal() {
    MODAL.addEventListener('click', () => {
        MODAL.style.display = 'none';
    });
}

function openImg() {
    const careerTechImgs = document.querySelectorAll('.career_tech_img');

    careerTechImgs.forEach((img) => {
        img.addEventListener('click', () => {
            MODAL_IMG.src = img.src;
            MODAL.style.display = 'flex';
        });
    });
}

function clickArticle() {
    articleTitles.forEach((title, idx) => {
        title.addEventListener('click', () => {
            if (CURRENT_ARTICLE === idx) {
                articles[CURRENT_ARTICLE].style.display = 'none';
                CURRENT_ARTICLE = -1;
            } else {
                CURRENT_ARTICLE = idx;
                articles[CURRENT_ARTICLE].style.display = 'block';
            }
        });
    });
}

function init() {
    openImg();
    clickModal();
    clickArticle();
}

init();
