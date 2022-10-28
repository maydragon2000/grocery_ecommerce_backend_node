const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    parent: {
      type: String,
      required: true,
    },
    children: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    tag: [String],

    flashSale: {
      type: Boolean,
      required: false,
      default: false,
    },

    status: {
      type: String,
      default: 'Show',
      enum: ['Show', 'Hide'],
    },
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
