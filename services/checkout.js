const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const path = require("path");

const lineItems = [
  {
    price_data: {
      currency: "usd",
      product_data: {
        name: "Node.js and Express book",
      },
      unit_amount: 50 * 100, // amount in cents
    },
    quantity: 1,
  },
];

const getStripeSession = async () => {
  return await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.BASE_URL}/complete`,
    cancel_url: `${process.env.BASE_URL}/cancel`,
  });
};

module.exports = { getStripeSession };
