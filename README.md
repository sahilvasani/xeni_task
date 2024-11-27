# ProductCard Challenge

This repository contains the implementation of a responsive and accessible `ProductCard` component for an e-commerce application, built using React, Redux, and TypeScript. The solution includes cart functionality, local storage persistence, and address to the provided requirements.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

---

## Features

1. **ProductCard Component**:

   - Displays product image, title, price, and an "Add to Cart" button.
   - Responsive design adapting to different screen sizes.
   - Accessible with proper ARIA labels and keyboard navigation.

2. **Cart Functionality**:

   - Manages cart state using Redux.
   - Persists cart data in local storage.
   - Displays added products in a separate tab/section.

3. **Interactivity**:

   - Clicking "Add to Cart" updates the Redux store and displays "Added to Cart."
   - Includes hover effects and a collapsible product description.

4. **Bonus**:
   - Developed in TypeScript for type safety.

## Technologies Used

- **Frontend**: React, Redux Toolkit, TypeScript
- **Styling**: Taildwind CSS
- **API**: [Fake Store API](https://fakestoreapi.com/)
- **Build Tool**: Webpack
- **Linting**: ESLint

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sahilvasani/xeni_task
   ```

2. **Install dependencies**:

   - npm install

3. **Run the app**:

   - npm start

4. **Build for production**:

   - npm run build

## usage

- Open the application in your browser.
- View the list of products fetched from the Fake Store API.
- Add products to the cart by clicking the "Add to Cart" button.
- Navigate to the cart section to view your selected products.
