const paypal = require("paypal-rest-sdk");
require("dotenv").config();

paypal.configure({
  mode: process.env.PAYMENT_MODE,
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
});

module.exports = paypal;
