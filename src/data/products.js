// src/data/products.js
import img1 from '../assets/lounge_jp.jpg';
import img2 from '../assets/table_jp.jpg';
import img3 from '../assets/armchair_jp.jpg';
import img4 from '../assets/sideTable_jp.jpg';
import img5 from '../assets/chair_jp.jpg';
import img6 from '../assets/shelves_jp.jpg';

export const products = [
    {
      id: 1,
      name: 'Coombes',
      category: 'Lounge',
      price: 2600,
      rating: 5,
      image: img1, // Add the image path
    },
    {
      id: 2,
      name: 'Keeve Set',
      category: 'Table & Chairs',
      price: 590,
      rating: 3,
      image: img2,
    },
    {
      id: 3,
      name: 'Nille',
      category: 'Armchair',
      price: 950,
      rating: 5,
      image: img3,
    },
    {
        id: 4,
        name: 'Blanko',
        category: 'Side Table',
        price: 900,
        rating: 4,
        image: img4,
    },
    {
        id: 5,
        name: 'Momo',
        category: 'Shelves',
        price: 890,
        rating: 4,
        image: img6,
      },
      {
        id: 6,
        name: 'Penemille',
        category: 'Chair',
        price: 120,
        rating: 5,
        image: img5,
      }
  ];
  