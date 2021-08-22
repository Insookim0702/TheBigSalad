import insoo from './Insoo';
const skillsSection = document.querySelector('.insoo_skills');
const skillsList = document.createElement('div');
skillsList.className = 'skills';

for (let skill of insoo.skills) {
    const skillsList_skillArea = document.createElement('div');
    skillsList_skillArea.className = 'skill_area';
    skillsList_skillArea.innerHTML = skill.title;
    const skillsList_ul = document.createElement('ul');
    for (let skill_content of skill.contents) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.className = 'black';
        p.innerHTML = skill_content.content;
        li.appendChild(p);
        skillsList_ul.appendChild(li);
        for (let link of skill_content.link) {
            const a = document.createElement('a');
            const p = document.createElement('p');
            a.target = '_blank';
            a.href = link.url;
            // a.className = 'black';
            a.innerHTML = link.title;
            p.appendChild(a);
            li.appendChild(p);
        }
    }
    skillsList_skillArea.appendChild(skillsList_ul);
    skillsList.appendChild(skillsList_skillArea);
}

skillsSection.appendChild(skillsList);
