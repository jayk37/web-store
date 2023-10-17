import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      setQuantity(0);
    } else {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    setQuantity(1);
  };

  return (
    <div className="product-card">
      <img src={product.imageURL} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.currency} {product.price}</p>
      {
        quantity === 0 ? 
        (<button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>)
        :
        (
          <div className="quantity-control">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
        )
      }
    </div>
  );
};

export default ProductCard;
