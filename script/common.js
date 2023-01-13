// header contents

const header = document.querySelector('header');


// topGrid contents

// Home Page link
const homePageIconID = document.querySelector('#home-page-icon')
const homePageLink = document.createElement('a');
homePageLink.setAttribute('href', 'index.html');


// <img> Home Page icon
const homeIcon = document.createElement('img');
homeIcon.setAttribute('src', '../images/icons/home-page-icon.png');
homeIcon.setAttribute('alt', 'Home Button');
homeIcon.setAttribute('id', 'home-icon');

homePageLink.appendChild(homeIcon);
homePageIconID.appendChild(homePageLink);

// Navigation Buttons

const navButtons = document.createElement('nav');
navButtons.setAttribute('id', 'navigation-buttons')

// Portfolio Form
const portfolioWebPage = document.createElement('form');
portfolioWebPage.setAttribute('action', 'portfolio.html')

// Portfolio Button
const portfolioButton = document.createElement('button');
portfolioButton.classList.add('nav-button');
portfolioButton.textContent = ("Portfolio");
portfolioWebPage.appendChild(portfolioButton)
navButtons.append(portfolioWebPage);

// Button 2 (Education)

// Education Form
const educationWebpage = document.createElement('form');
educationWebpage.setAttribute('action', 'education.html');

// Education Button
const educationButton = document.createElement('button');
portfolioButton.classList.add('nav-button');
educationButton.textContent = ("Education");
educationWebpage.appendChild(educationButton);
navButtons.append(educationWebpage);


header.append(navButtons);

// footer contents
const footer = document.querySelector('footer');

const contactMeLink = document.createElement('a');
contactMeLink.setAttribute('href', 'contact-me.html');
contactMeLink.setAttribute('id', 'contact-me')
contactMeLink.textContent = ('Contact Me');

footer.appendChild(contactMeLink);
