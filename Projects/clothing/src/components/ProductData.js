/**
 * Array containing product objects with details such as id, title, price, image, description,
 * available sizes, available colors, and reviews.
 * @type {Object[]}
 */
const products = [
  {
    id: 1,
    title: 'Product 1',
    price: '$19.99',
    image: '/images/product1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#FF0000', '#0000FF', '#00FF00'],
    reviews: [
      { id: 1, rating: 4, comment: 'Great product!' },
      { id: 2, rating: 5, comment: 'Highly recommended!' }
    ]
  },
  {
    id: 2,
    title: 'Product 2',
    price: '$29.99',
    image: '/images/product2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#FFFFFF', '#808080'],
    reviews: [
      { id: 1, rating: 3, comment: 'Good product.' },
      { id: 2, rating: 4, comment: 'Nice design.' }
    ]
  },
  {
    id: 3,
    title: 'Product 3',
    price: '$32.99',
    image: '/images/product3.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#FFFF00', '#800080', '#FFA500'],
    reviews: [
      { id: 1, rating: 5, comment: 'Excellent product!' },
      { id: 2, rating: 4, comment: 'Very satisfied.' }
    ]
  }
];

export default products;
