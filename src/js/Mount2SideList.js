const stickyBox = document.querySelector('.content_sticky_box');
const linkList = document.createElement('div');

linkList.className = 'contents';
const list = [
    { title: 'Work Experience', link: '#work-experience' },
    { title: 'Skills', link: '#skills' },
    { title: 'Big Challenge', link: '#big-challenge' },
    { title: 'Contact', link: '#contact' },
    // { title: 'My Salad Project', link: '#contact' },
    // { title: 'Alone Study', link: '#contact' },
];
for (let item of list) {
    const p = document.createElement('p');
    const a = document.createElement('a');
    a.className = 'black link';
    a.href = item.link;
    a.innerText = item.title;
    p.appendChild(a);
    linkList.appendChild(p);
}

stickyBox.appendChild(linkList);
