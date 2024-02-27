import './about.css';

export function About() {
  const element = document.createElement('div');
  element.classList.add('about');
  
  const heading = document.createElement('h1');
  heading.textContent = 'About Pizza Piza';
  element.appendChild(heading);

  const introParagraph = document.createElement('p');
  introParagraph.textContent = "Welcome to Pizza Piza, where we've been delighting taste buds with our homemade pizzas since 1998. Our passion for crafting the perfect pizza is evident in every slice.";
  element.appendChild(introParagraph);
  
  const address = document.createElement('p');
  address.textContent = "Address: 123 Pizza St, Pizzatown, PZ 45678";
  element.appendChild(address);
  
  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = "Phone: (123) 456-7890";
  element.appendChild(phoneNumber);
  
  const openingHours = document.createElement('p');
  openingHours.textContent = "Open Hours: Monday - Sunday, 11:00 AM - 11:00 PM";
  element.appendChild(openingHours);

  return element;
}
