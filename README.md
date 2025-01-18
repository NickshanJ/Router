# Fake Store ReactJS Application - Router

This project is a simple ReactJS application that fetches product data from the Fake Store API and allows users to add products to the cart through a modal interface.

## Features

- Fetches products from the Fake Store API and displays them on the main page.
- Users can add products to the cart through an "Add to Cart" button.
- Displays an alert if the product is already in the cart.
- Displays the current cart items count in the Navbar component.
- Opens a modal to show the cart items when the "Cart" button is clicked.
- Allows users to remove products from the cart within the modal.
- Responsive layout for both desktop and mobile devices.
- Clean and readable code with necessary comments and documentation.

## Tech

- **ReactJS**: For building the user interface.
- **HTML/CSS**: For the structure and styling of the app.
- **Tailwind CSS**: For styling the components.
- **JavaScript**: For functionality.

## Installation

1. Clone the repository:

 git clone - https://github.com/NickshanJ/Router.git

2. cd Router

3. npm install

4. npm run dev

5. This Application will be available in : https://router0.netlify.app/


## Project Structure:

App.jsx :

App.jsx is the central component of your application, responsible for managing the state and rendering the main elements of the UI.

State Management: It uses state variables to manage the cart items and the visibility of the cart page.

Functions: It includes functions to add items to the cart, update the quantity of items, remove items from the cart, and toggle the cart visibility.

Router and Navigation: It sets up routing and navigation. The navigation bar displays a cart icon with the number of items in the cart. Depending on the state, it conditionally renders the CartPage or ProductList components.

ProductList.jsx :

ProductList.jsx is responsible for fetching product data and displaying the list of products.

Fetching Products: It fetches product data from the Fake Store API using a useEffect hook.

Displaying Products: It maps over the fetched product data and displays each product in a styled card, including an image, title, description, price, rating, and an "Add to Cart" button.

CartPage.jsx :

CartPage.jsx manages and displays the items in the shopping cart.

Calculating Totals: It calculates the total amount, a 10% discount, and the grand total for the cart items.

Displaying Cart Items: It displays the cart items with the ability to update the quantity of items or remove them from the cart. It also shows the total amount, discount, and grand total at the bottom of the page.
APIs ;

The product data is fetched from Fake Store API.

This API provides information about various products including images, prices, ratings, and descriptions.

Styling :

The application uses Tailwind CSS for styling.

Additional custom styles are defined in App.css.

## Usage:

Browse the products displayed on the main page.

Click the "Add to Cart" button to add products to the cart.

Click the "Cart" button in the Navbar to view the cart items.

Remove items from the cart using the "Remove" button in the modal.


## Acknowledgements:

Fake Store API for providing the product data.

