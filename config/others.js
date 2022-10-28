const rateLimit = require('express-rate-limit');
const Product = require('../models/Product');

//decrease product quantity after a order created
const handleProductQuantity = (cart) => {
  cart.forEach((p) => {
    Product.updateOne(
      { _id: p._id },
      {
        $inc: {
          quantity: -p.quantity,
        },
      },
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log('success');
        }
      }
    );
  });
};

//limit email verification and forget password
const minutes = 30;
const emailVerificationLimit = rateLimit({
  windowMs: minutes * 60 * 1000,
  max: 3,
  handler: (req, res) => {
    res.status(429).send({
      success: false,
      message: `You made too many requests. Please try again after ${minutes} minutes.`,
    });
  },
});

const passwordVerificationLimit = rateLimit({
  windowMs: minutes * 60 * 1000,
  max: 3,
  handler: (req, res) => {
    res.status(429).send({
      success: false,
      message: `You made too many requests. Please try again after ${minutes} minutes.`,
    });
  },
});

//handle amount format for stripe
const formatAmountForStripe = (amount, currency) => {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
};

module.exports = {
  handleProductQuantity,
  emailVerificationLimit,
  passwordVerificationLimit,
  formatAmountForStripe,
};
