// src/components/Product.tsx
import css from "./Product.module.css";

interface ProductProps {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
}

export default function Product({
  id,
  name,
  imgUrl,
  price,
  quantity,
  onIncrement,
  onDecrement,
}: ProductProps) {
  return (
    <div className={css.container}>
      {/* Умовний рендеринг бейджа */}
      {quantity > 0 && <span className={css.badge}>In cart: {quantity}</span>}

      <h2 className={css.title}>{name}</h2>
      <img className={css.image} src={imgUrl} alt={name} />
      <p className={css.price}>
        Price: <span>{price} $</span>
      </p>

      {/* Умовний рендеринг загальної суми за один товар */}
      {quantity > 0 ? (
        <p className={css.totalPrice}>
          Total: <strong>{(quantity * price).toFixed(2)} $</strong>
        </p>
      ) : (
        <p className={css.emptyNotice}>Select quantity</p>
      )}

      {/* Блок управління кількістю */}
      <div className={css.actions}>
        <button
          className={css.button}
          onClick={() => onDecrement(id)}
          disabled={quantity === 0}
        >
          -
        </button>

        <span className={css.quantityText}>{quantity}</span>

        <button className={css.button} onClick={() => onIncrement(id)}>
          +
        </button>
      </div>
    </div>
  );
}