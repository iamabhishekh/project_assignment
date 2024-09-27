// src/App.test.js

import React from 'react';  // Make sure you're importing React here
import { render, screen } from '@testing-library/react';  // Using react-testing-library's render
import App from './App';  // Assuming App is your main component

test('renders learn react link', () => {
  render(<App />);  // No need to manually wrap in act if using react-testing-library
  
});
