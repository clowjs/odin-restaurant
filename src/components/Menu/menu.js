import './menu.css';

export function Menu() {
  const element = document.createElement('div');
  element.classList.add('menu');
  
  const heading = document.createElement('h1');
  heading.textContent = 'Our Pizza Menu';
  element.appendChild(heading);

  // Create a list for the menu items
  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list');

  // Define the pizza items with prices
  const pizzas = [
    { name: 'Margherita', description: 'Classic delight with 100% pure mozzarella cheese', price: '$8.99' },
    { name: 'Pepperoni', description: 'Pepperoni, mozzarella cheese, and tomato sauce', price: '$9.99' },
    { name: 'BBQ Chicken', description: 'Grilled chicken, BBQ sauce, onions, and cilantro', price: '$10.99' },
    { name: 'Vegetarian', description: 'Mushrooms, onions, green peppers, tomatoes, and olives', price: '$9.49' },
    { name: 'Hawaiian', description: 'Ham, pineapple, and mozzarella cheese', price: '$10.49' },
  ];

  // Add each pizza item to the menuList
  pizzas.forEach(pizza => {
    const item = document.createElement('li');
    item.classList.add('menu-item');

    const itemName = document.createElement('h2');
    itemName.textContent = pizza.name;
    itemName.classList.add('menu-item-name');

    const itemDescription = document.createElement('p');
    itemDescription.textContent = pizza.description;
    itemDescription.classList.add('menu-item-description');

    // Create a span for the price
    const itemPrice = document.createElement('span');
    itemPrice.textContent = pizza.price;
    itemPrice.classList.add('menu-item-price');

    item.appendChild(itemName);
    item.appendChild(itemDescription);
    item.appendChild(itemPrice); // Add the price to the item

    menuList.appendChild(item);
  });

  // Append the menu list to the main element
  element.appendChild(menuList);

  return element;
}
