// Product.js

export const colors = ['black', 'white', 'gray', 'blue', 'red', 'green'];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const categories = ['all', 'men', 'women', 'unisex', 'limited'];

// This is just for reference/documentation purposes.
// In actual usage, you'd use objects without types.
export const sampleProduct = {
  id: 'example-id',
  name: 'Example Product',
  price: 0,
  description: 'Description here',
  image: 'https://example.com/image.jpg',
  colors: ['black', 'white'], // use values from `colors`
  sizes: ['M', 'L'],          // use values from `sizes`
  category: 'unisex',         // use value from `categories`
  featured: true,             // optional
  new: false                  // optional
};

export const sampleCartItem = {
  productId: 'example-id',
  quantity: 1,
  size: 'M',           // use value from `sizes`
  color: 'black'       // use value from `colors`
};
