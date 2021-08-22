const stickyBox = document.querySelector('.content_sticky_box');
const linkList = document.createElement('div');
linkList.className = 'contents';
const list = [
    { title: 'Work Experience', link: '#work-experience' },
    { title: 'Big Challenge', link: '#big-challenge' },
    { title: 'Skills', link: '#skills' },
    { title: 'Contact', link: '#contact' },
    // { title: 'My Salad Project', link: '#contact' },
    // { title: 'Alone Study', link: '#contact' },
];
for (let item of list) {
    const p = document.createElement('p');
    p.className = 'little_title';
    const a = document.createElement('a');
    a.className = 'black link';
    a.href = item.link;
    a.innerText = item.title;
    p.appendChild(a);
    linkList.appendChild(p);
}

stickyBox.appendChild(linkList);
