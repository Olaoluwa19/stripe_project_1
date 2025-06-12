const {
  getStripeSession,
  retrieveStripeSession,
  retrieveLineItems,
} = require("../services/stripeServices");

const handleCheckout = async (req, res) => {
  const session = await getStripeSession();

  res.redirect(session.url);
};

const paymentSuccess = async (req, res) => {
  const sessionId = req.query.session_id;
  const session = await retrieveStripeSession(sessionId);
  const lineItems = await retrieveLineItems(sessionId);

  //   const result = { session, lineItems };

  console.log([
    JSON.stringify(session, null, 2),
    JSON.stringify(lineItems, null, 2),
  ]);

  res.send("Payment successful! Thank you for your purchase.");
};

const paymentCancel = async (req, res) => {
  //   res.send("Payment cancelled. Please try again.");
  res.redirect("/");
};

module.exports = { handleCheckout, paymentSuccess, paymentCancel };
