import './style.css';
import { Home } from './components/Home/home.js'
import { Menu } from './components/Menu/menu.js'
import { About } from './components/About/about.js'

const buttons = document.querySelectorAll('button');
const content = document.getElementById('content');
content.appendChild(Home());

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'btnHome') {
      content.innerHTML = '';
      content.appendChild(Home());
    } else if (e.target.id === 'btnMenu') {
      content.innerHTML = '';
      content.appendChild(Menu());
    } else if (e.target.id === 'btnAbout') {
      content.innerHTML = '';
      content.appendChild(About());
    }
  });
});