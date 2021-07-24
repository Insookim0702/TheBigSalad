const totalCareer = document.querySelector('.totalCareer');
const currentJobPeriod = document.querySelectorAll('.currentJobPeriod');

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
}

init();
