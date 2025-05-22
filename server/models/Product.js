const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  sizes: [String],
  images: [String],
  stock: Number,
  anime: String
});
module.exports = mongoose.model('Product', productSchema);