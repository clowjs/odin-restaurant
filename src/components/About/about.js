import './about.css';

export function About() {
  const element = document.createElement('div');
  element.classList.add('about');
  
  const heading = document.createElement('h1');
  heading.textContent = 'About';
  element.appendChild(heading);

  return element;
}