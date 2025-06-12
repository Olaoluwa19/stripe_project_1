const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const path = require("path");

const getLineItem = (productName, amount, quantity) => {
  return {
    price_data: {
      currency: "usd",
      product_data: {
        name: productName,
      },
      unit_amount: amount * 100, // amount in cents
    },
    quantity: quantity,
  };
};

const getStripeSession = async () => {
  return await stripe.checkout.sessions.create({
    line_items: [
      getLineItem("Node.js and Express book", 50, 1),
      getLineItem("JavaScript T-shirt", 20, 2),
    ],
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: ["US", "NG"],
    },
    success_url: `${process.env.BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/cancel`,
  });
};

const retrieveStripeSession = async (sessionId) => {
  return await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent.payment_method"],
  });
};

const retrieveLineItems = async (sessionId) => {
  return await stripe.checkout.sessions.listLineItems(sessionId);
};

module.exports = { getStripeSession, retrieveStripeSession, retrieveLineItems };
