function init() {
    const currentJobPeriod = document.querySelectorAll('.currentJobPeriod');
    const totalCareer = document.querySelector('.totalCareer');
    const currentDate = new Date();
    const machbaseJobStartDate = new Date(2021, 1, 25);
    const wisenutPeriod = 15;
    const brandiPeriod = 2;
    const diffMonth = currentDate.getMonth() - machbaseJobStartDate.getMonth() + 1;
    const diffYear = currentDate.getFullYear() - machbaseJobStartDate.getFullYear();
    console.log(Math.floor((wisenutPeriod + brandiPeriod + diffMonth) / 12));
    totalCareer.innerText = `${Math.floor((wisenutPeriod + brandiPeriod + diffMonth) / 12) + diffYear}년 ${(wisenutPeriod + brandiPeriod + diffMonth) % 12}개월`;

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
