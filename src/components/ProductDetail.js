// src/components/ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import '../../src/ProductDetail.css'; // Include a separate CSS file for styling

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]); // Set default color

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        {/* Product Image */}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Product Information */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-category">{product.category}</p>
          
          {/* Static Product Description */}
          <p className="product-description">
            This is a beautiful handcrafted piece from our {product.name} collection. It is perfect for any modern interior.
          </p>

          {/* Color Selection */}
            <div className="color-options">
              {/* Color Options */}
          <div className="product-color">
            <label>Color</label>
            <div className="color-options">
              <label>
                <input type="radio" name="color" value="black" />
                <span className="black-color"></span>
              </label>
              <label>
                <input type="radio" name="color" value="gray" />
                <span className="gray-color"></span>
              </label>
            </div>
          
            </div>
          </div>

            <h3 className="product-price">${product.price.toLocaleString()}</h3>
            <p className="product-rating">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</p>

          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
