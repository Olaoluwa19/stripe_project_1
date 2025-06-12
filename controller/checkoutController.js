const { getStripeSession } = require("../services/checkout");

const handleCheckout = async (req, res) => {
  const session = await getStripeSession();

  res.redirect(session.url);
};

const paymentSuccess = async (req, res) => {
  res.send("Payment successful! Thank you for your purchase.");
};

const paymentCancel = async (req, res) => {
  //   res.send("Payment cancelled. Please try again.");
  res.redirect("/");
};

module.exports = { handleCheckout, paymentSuccess, paymentCancel };
