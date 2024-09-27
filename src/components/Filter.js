// src/components/Filter.js

import React from 'react';
import '../../src/Filter.css';

const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter">
      <h3>Filter By</h3>
      <div className="filter-section">
        <label>Collection</label>
        <select>
          {/* Static example */}
          <option>All Collections</option>
          <option>Modern</option>
          <option>Vintage</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Color</label>
        <select>
          {/* Static example */}
          <option>All Colors</option>
          <option>Black</option>
          <option>White</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Category</label>
        <select value={selectedCategory} onChange={e => onCategoryChange(e.target.value)}>
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label>Price Range</label>
        <input type="range" min="0" max="10000" />
      </div>
    </div>
  );
};

export default Filter;
