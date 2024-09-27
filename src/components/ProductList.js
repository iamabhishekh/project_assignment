// src/components/ProductList.js

import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import Product from './Product';
import Filter from './Filter';
import Pagination from './Pagination';
import '../../src/ProductList.css';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Memoize categories to prevent recalculating on each render
  const categories = useMemo(() => ['All', ...new Set(products.map(product => product.category))], [products]);

  // Memoize filtered products to avoid unnecessary recalculations
  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <div className="product-list-container">
      <Filter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductList;
