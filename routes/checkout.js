const express = require("express");
const router = express.Router();
const { handleCheckout } = require("../controller/checkoutController");

router.post("/", handleCheckout);

module.exports = router;
