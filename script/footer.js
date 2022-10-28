const footer = document.querySelector('footer');

const contactMeLink = document.createElement('a');
contactMeLink.setAttribute('href', 'contact-me.html');
contactMeLink.setAttribute('id', 'contact-me')
contactMeLink.textContent = ('Contact Me');

footer.appendChild(contactMeLink);