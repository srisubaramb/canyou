# Weekend Project: "Smart Mini E-commerce Storefront"

**Time Allotted:** Saturday & Sunday
**Objective:** Build a responsive, interactive mini e-commerce web application using HTML5, CSS3, ES6+ JavaScript, and basic asynchronous programming.

---

## Part 1: Structure & Semantics 
Create an `index.html` file using proper semantic structure.

1. **Layout Elements:** Use `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, and `<footer>` appropriately.
2. **Product Grid:** In the `<main>` section, create a container for products. Use `<figure>`, `<img>`, and `<figcaption>` for product display. Add "Add to Cart" buttons.
3. **Filter Sidebar:** In the `<aside>`, create a `<form>` to filter products:
   - Checkboxes for categories (e.g., Electronics, Clothing).
   - A `<input type="range">` for a maximum price filter.
   - A reset `<button>`.
4. **Shopping Cart:** Create a `<table>` inside a section to display added items (Columns: Image, Product Name, Price, Action). Use `<thead>`, `<tbody>`, and `<tfoot>` (for the total price).
5. **Checkout Section:** Create a checkout form with HTML5 validation:
   - Name (`type="text"`, required)
   - Email (`type="email"`, required)
   - Phone (`type="tel"`, pattern)
   - Submit Button.

---

## Part 2: Styling & Responsive Design 
Create a `style.css` file to bring the store to life.

1. **Modern Layout:**
   - Use **CSS Grid** for the main page layout (e.g., sidebar on the left, product grid on the right on desktop).
   - Use **Flexbox** for the navigation bar, aligning items inside product cards, and centering form elements.
2. **Responsive Design:** Use `@media` queries (mobile-first approach). On mobile, the sidebar should stack above the product grid, and the grid should be 1 column. On tablets, 2 columns. On desktop, 3+ columns.
3. **Aesthetics & Variables:** Use CSS Variables (custom properties) for a consistent primary color, secondary color, and typography.
4. **Animations & Interactions:**
   - Add hover states to buttons and links using `transition`.
   - Add a slight `transform: scale(1.05)` when hovering over product cards.
   - Create a simple `@keyframes` loading spinner (hidden by default) for the checkout process.

---

## Part 3: Interactivity & Logic 
Create a `script.js` file to make the app functional.

1. **Data Structure (Objects & Arrays):**
   - Create an array of at least 6 product objects. Example:  
     `{ id: 1, name: "Wireless Headphones", price: 99.99, category: "electronics", img: "..." }`
2. **Dynamic Rendering (ES6+):**
   - Use array methods (`forEach` or `map`) and Template Literals to dynamically generate the HTML for the product grid from your array, rather than hardcoding it in HTML.
3. **Cart Functionality (Control Flow & Functions):**
   - Create an empty `cart` array.
   - Write a function to handle "Add to Cart" clicks. Check if the item is already in the cart.
   - Write a function to re-render the Cart `<table>` whenever an item is added, and use `.reduce()` to calculate the total price.
4. **Filtering (Array Methods):**
   - Add event listeners to the sidebar form. Use `.filter()` to update the displayed products based on selected categories or maximum price.
5. **Asynchronous Checkout (Week 4, Day 1):**
   - Prevent the default form submission on the checkout form.
   - When submitted, hide the form and display your CSS loading spinner.
   - Use `setTimeout` (with a callback) to simulate a 3-second payment processing delay.
   - After 3 seconds, hide the spinner, clear the cart, render a success message, and `console.log` a simulated order confirmation object.

---

## Deliverables
Please submit a zipped folder containing:
- `index.html`
- `style.css`
- `script.js`
- (Optional) An `images` folder for your product images.