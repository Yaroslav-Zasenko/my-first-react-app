// src/components/App.tsx
import { useState } from "react";
import css from "./App.module.css";
import productsData from "../data/products.json";
import Product from "./Product";


export default function App() {
  // Стан для збереження кількості кожного товару за його id
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  const handleIncrement = (id: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: prevCart[id] > 0 ? prevCart[id] - 1 : 0,
    }));
  };

  // Очищення кошика
  const handleClearCart = () => {
    setCart({});
  };

  // Розрахунок загальної суми всього замовлення
  const grandTotal = productsData.reduce((acc, product) => {
    const qty = cart[product.id] || 0;
    return acc + qty * product.price;
  }, 0);
  //Розрахунок загальної кількості всіх товарів у кошику
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Best selling</h1>
      <div className={css.list}>
        {productsData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            imgUrl={product.imgUrl}
            price={product.price}
            quantity={cart[product.id] || 0}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>

      {/* Блок із загальною сумою */}
      <div className={css.summary}>
        <p>Total Items: {totalItems}</p>
        <h2>Grand Total: {grandTotal.toFixed(2)} $</h2>

        {/* Показуємо кнопку лише якщо в кошику є хоча б один товар */}
        {totalItems > 0 && (
          <button className={css.clearButton} onClick={handleClearCart}>
            Clear Cart
          </button>
        )}
        
      </div>
    </div>
  );
}