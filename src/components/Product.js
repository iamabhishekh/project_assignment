// src/components/Product.js

import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <p>{'★'.repeat(product.rating)}</p>
      </Link>
    </div>
  );
};

export default Product;
