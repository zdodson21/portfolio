const navButtons = document.querySelector('#common-buttons');

// TODO may need to wrap each button in a form in order to have it link to another webpage
// need to look into this

// Button 1 (Portfolio)

// Form
const portfolioWebPage = document.createElement('form');
portfolioWebPage.setAttribute('action', 'portfolio.html')

// Button
const portfolioButton = document.createElement('button');
portfolioButton.textContent = ("Portfolio");
portfolioButton.addEventListener('click', () => {
    console.log('Portfolio button pushed');
    // TODO link to portfolio web page
});
portfolioWebPage.appendChild(portfolioButton)
navButtons.append(portfolioWebPage);

// Button 2 (Education)

// Form
const educationWebpage = document.createElement('form');
educationWebpage.setAttribute('action', 'education.html');

// Button
const educationButton = document.createElement('button');
educationButton.textContent = ("Education");
educationButton.addEventListener('click', () => {
    console.log('Education button pushed');
    // TODO link to projects web page
});
educationWebpage.appendChild(educationButton);
navButtons.append(educationWebpage);

// Add more buttons below