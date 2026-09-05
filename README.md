# 🛒 Mini E-Commerce App (Sweet Factory Shop)

A mini e-commerce web application built to practice and solidify core **React** and **TypeScript** fundamentals as part of the Fullstack Development program at **GoIT**.

🚀 **[View Live Demo](https://yaroslav-zasenko.github.io/my-first-react-app/)**

---

## 📌 Features

* **Product Catalog**: Dynamic rendering of product cards from structured JSON data (image, name, price).
* **Cart Management**: Increment and decrement item quantities directly within individual product cards.
* **Lifting State Up**: Centralized state management in the root `App` component acting as the Single Source of Truth.
* **Derived State**:
  * Real-time calculation of total item count (`Total Items`).
  * Dynamic total order value calculation (`Grand Total`).
* **Clear Cart Feature**: Conditional "Clear Cart" button that resets the cart state when items are present.

---

## 🛠 Tech Stack

* **Frontend**: React 19, TypeScript
* **Build Tool**: Vite
* **Styling**: CSS Modules
* **Deployment**: GitHub Pages (CI/CD via GitHub Actions)

---

## 💻 Local Setup & Development

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Yaroslav-Zasenko/my-first-react-app.git](https://github.com/Yaroslav-Zasenko/my-first-react-app.git)
   cd my-first-react-app
