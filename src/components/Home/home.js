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

  const paragraphs = [
    "Nestled in the heart of Pizzatown, Pizza Piza has been a beacon of culinary excellence since its inception in 1998. Founded on the principles of quality, freshness, and community, our pizzeria has become a beloved local landmark where families, friends, and pizza aficionados gather to enjoy the ultimate pizza experience. At Pizza Piza, every slice tells a story of tradition and innovation, blending time-honored techniques with creative flair to produce pizzas that are truly one of a kind.",
    "At Pizza Piza, we believe that the secret to great pizza lies in the ingredients. That's why we go the extra mile to source the finest local produce, handpicked for their freshness and flavor. Our dough is made from scratch daily, using a proprietary recipe that has been perfected over decades. Topped with our signature sauce, a rich blend of vine-ripened tomatoes and a secret mix of herbs and spices, and layered with premium cheeses and the freshest toppings, our pizzas are a testament to our commitment to excellence."
  ];

  paragraphs.forEach(paragraph => {
    const item = document.createElement('p');
    item.textContent = paragraph;
    element.appendChild(item);
  });

  return element;
}