const express = require("express");
const router = express.Router();
const { paymentCancel } = require("../controller/checkoutController");

router.get("/", paymentCancel);

module.exports = router;
