const express = require("express");
const router = express.Router();
const { paymentSuccess } = require("../controller/checkoutController");

router.get("/", paymentSuccess);

module.exports = router;
