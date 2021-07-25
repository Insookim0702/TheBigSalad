const articleStates = document.querySelectorAll('.article_state');
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
                closeArticle();
            } else {
                closeArticle();
                openArticle(idx);
            }
        });
    });
}

function closeArticle() {
    if (CURRENT_ARTICLE !== -1) {
        articleStates[CURRENT_ARTICLE].innerHTML = '▼';
        articles[CURRENT_ARTICLE].style.display = 'none';
        articleTitles[CURRENT_ARTICLE].style.color = 'black';
        CURRENT_ARTICLE = -1;
    }
}

function openArticle(idx) {
    CURRENT_ARTICLE = idx;
    articleStates[CURRENT_ARTICLE].innerHTML = '△';
    articles[CURRENT_ARTICLE].style.display = 'block';
    articleTitles[CURRENT_ARTICLE].style.color = '#00b894';
}

function init() {
    openImg();
    clickModal();
    clickArticle();
}

init();
