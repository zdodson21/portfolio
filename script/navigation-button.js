const navButtons = document.querySelector('#common-buttons');

// Button 1 (Portfolio)
const portfolioButton = document.createElement('button');
portfolioButton.textContent = ("Portfolio");
portfolioButton.addEventListener('click', () => {
    console.log('Portfolio button pushed');
    // TODO link to portfolio web page
});
navButtons.append(portfolioButton);

// Button 2 (Education)
const educationButton = document.createElement('button');
educationButton.textContent = ("Education");
educationButton.addEventListener('click', () => {
    console.log('Education button pushed');
    // TODO link to projects web page
});
navButtons.append(educationButton);

// Add more buttons below