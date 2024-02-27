import Logo from '../../assets/logo.jpg';
import './home.css';

export function Home() {
  const element = document.createElement('div');
  element.classList.add('home');
  
  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Pizza Piza!';
  element.appendChild(heading);

  const myIcon = new Image();
  myIcon.src = Logo;
  myIcon.classList.add('logo');
  element.appendChild(myIcon);

  const paragraph = document.createElement('p');
  paragraph.textContent = "Welcome to Our Wonderful Restaurant, where culinary dreams come true! Nestled in the heart of the city, our restaurant offers a unique dining experience that you won't find anywhere else. With dishes crafted by world-renowned chefs, we're dedicated to providing you with an unforgettable gastronomic journey. ";
  element.appendChild(paragraph);

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = "Our menu features a wide variety of dishes made from the freshest, locally-sourced ingredients. From exquisite appetizers to decadent desserts, every dish is prepared with care and precision, ensuring that each bite is a testament to our commitment to excellence.";
  element.appendChild(paragraph2);

  const paragraph3 = document.createElement('p');
  paragraph3.textContent = "We pride ourselves on our warm and welcoming atmosphere, where every guest is treated like family. Whether you're celebrating a special occasion or just looking for a place to enjoy a delicious meal, Our Wonderful Restaurant is the perfect destination. We look forward to welcoming you and making your dining experience truly spectacular.";
  element.appendChild(paragraph3);

  return element;
}