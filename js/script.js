// Variables
const body = document.querySelector('body');
const cardBody = document.querySelectorAll('.dark-mode');
const toggleBtn = document.querySelector('#js-toggle');
const headerBackground = document.querySelector('header');
const textCol = document.querySelectorAll('.darkmode-textcol');

// Reusable Code
const setBGColor = (element, color) => (element.style.backgroundColor = color);
const textColor = (element, color) => (element.style.color = color);

// Colors
const colCharade = 'hsl(230, 17%, 14%)';
const colEbonyclay = 'hsl(228, 28%, 20%)';
const lightEbonyclay = 'hsl(228, 28%, 25%)';
const colSteelgray = 'hsl(232, 19%, 15%)';
const colWhite = '#fff';
const whiteLilac = '#f0f2fa';
const lightWhiteLilac = 'hsl(227, 47%, 92%)';

const themeSwitch = darkmode => {
  if (darkmode === 'darkmode') {
    setBGColor(body, colCharade);
    setBGColor(headerBackground, colSteelgray);
    for (let i = 0; i < cardBody.length; i++) {
      setBGColor(cardBody[i], colEbonyclay);
      cardBody[i].addEventListener('mouseover', () => {
        setBGColor(cardBody[i], lightEbonyclay);
        cardBody[i].addEventListener('mouseout', () => {
          setBGColor(cardBody[i], colEbonyclay);
        });
      });
    }

    for (let i = 0; i < textCol.length; i++) {
      textColor(textCol[i], colWhite);
    }
  } else {
    setBGColor(body, '');
    setBGColor(headerBackground, '');
    for (let i = 0; i < cardBody.length; i++) {
      setBGColor(cardBody[i], '');
      cardBody[i].addEventListener('mouseover', () => {
        setBGColor(cardBody[i], lightWhiteLilac);
        cardBody[i].addEventListener('mouseout', () => {
          setBGColor(cardBody[i], whiteLilac);
        });
      });
    }

    for (let i = 0; i < textCol.length; i++) {
      textColor(textCol[i], '');
    }
  }
};

const loadSavedSettings = () => {
  if (localStorage.getItem('darkMode') === 'true') {
    themeSwitch('darkmode');
    toggleBtn.checked = true;
  } else {
    themeSwitch();
    toggleBtn.checked = false;
  }
};

loadSavedSettings();

// Event Listener
toggleBtn.addEventListener('click', () => {
  const btnChecked = toggleBtn.checked;

  if (btnChecked) {
    themeSwitch('darkmode');
    localStorage.setItem('darkMode', btnChecked);
  } else {
    themeSwitch();
    localStorage.setItem('darkMode', (btnChecked.checked = false));
  }
});
