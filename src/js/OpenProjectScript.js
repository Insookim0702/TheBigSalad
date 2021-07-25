const OPEN_PROJECTS = document.querySelectorAll('.open_project');
const PROJECTS = document.querySelectorAll('.projects');
const PROJECT_OPEN_STATE = document.querySelectorAll('.project_open_state');
const PROJECT_TEXT = document.querySelectorAll('.project_text');
const OPEN_TEXT = ['마크베이스 경력기술서 보기', '브랜디 경력기술서 보기', '와이즈넛 경력기술서 보기'];
const CLOSE_TEXT = ['마크베이스 경력기술서 닫기', '브랜디 경력기술서 닫기', '와이즈넛 경력기술서 닫기'];
let CURRENT_OPEN_COMPONY_PROJECT = -1;

function closeProject() {
    if (CURRENT_OPEN_COMPONY_PROJECT !== -1) {
        PROJECT_OPEN_STATE[CURRENT_OPEN_COMPONY_PROJECT].innerHTML = '▼';
        PROJECTS[CURRENT_OPEN_COMPONY_PROJECT].style.display = 'none';
        PROJECT_TEXT[CURRENT_OPEN_COMPONY_PROJECT].innerHTML = OPEN_TEXT[CURRENT_OPEN_COMPONY_PROJECT];
        CURRENT_OPEN_COMPONY_PROJECT = -1;
    }
}

function openProject(idx) {
    CURRENT_OPEN_COMPONY_PROJECT = idx;
    PROJECT_OPEN_STATE[CURRENT_OPEN_COMPONY_PROJECT].innerHTML = '△';
    PROJECT_TEXT[CURRENT_OPEN_COMPONY_PROJECT].innerHTML = CLOSE_TEXT[CURRENT_OPEN_COMPONY_PROJECT];
    PROJECTS[CURRENT_OPEN_COMPONY_PROJECT].style.display = 'block';
}

function clickProjects() {
    OPEN_PROJECTS.forEach((open_project, idx) => {
        open_project.addEventListener('click', () => {
            if (CURRENT_OPEN_COMPONY_PROJECT === idx) {
                closeProject();
            } else {
                closeProject();
                openProject(idx);
            }
        });
    });
}

function init() {
    clickProjects();
}

init();
