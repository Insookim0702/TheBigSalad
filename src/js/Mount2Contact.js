import insoo from './Insoo';
const contactSection = document.querySelector('.insoo_contact');
const contactTitle = document.createElement('h2');
contactTitle.innerHTML = '<a class="black link" href="#contact" name="contact">Contact</a><span class="point">.</span>';

const contactList = document.createElement('div');
contactList.className = 'contact';

const contactList_ul = document.createElement('ul');
for (let contact of insoo.contact) {
    const contactList_li = document.createElement('li');
    const contactItem = document.createElement('a');
    contactItem.innerText = contact.source;
    contactItem.href = contact.link;
    contactList_li.appendChild(contactItem);
    contactList_ul.appendChild(contactList_li);
}

contactSection.appendChild(contactTitle);
contactSection.appendChild(contactList);
contactList.appendChild(contactList_ul);
// console.log(insooObject);
