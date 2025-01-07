// index.js
import './styles.css';
import homeTab from './home.js';
import menuTab from './menu.js';
import contactTab from './contact.js';

const body = document.querySelector('body');

const header = document.createElement('header');
const nav = document.createElement('nav');

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');

button1.textContent = 'Home';
button2.textContent = 'Menu';
button3.textContent = 'Contact';

nav.appendChild(button1);
nav.appendChild(button2);
nav.appendChild(button3);
header.appendChild(nav);

const content = document.createElement('div');


body.appendChild(header);
body.appendChild(content);

// Function to clear the content and load the new tab
function loadTab(tabModule) {
    content.innerHTML = ''; // Clear current content
    content.appendChild(tabModule()); // Load new content
}

// Event Listeners for buttons
button1.addEventListener('click', () => loadTab(homeTab));
button2.addEventListener('click', () => loadTab(menuTab));
button3.addEventListener('click', () => loadTab(contactTab));

// Default tab on page load
loadTab(homeTab);


