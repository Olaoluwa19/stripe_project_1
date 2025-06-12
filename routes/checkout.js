const express = require("express");
const router = express.Router();
const { handleCheckout } = require("../controller/checkoutController");

router.use("/", handleCheckout);

module.exports = router;
