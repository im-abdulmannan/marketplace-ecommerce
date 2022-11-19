const express = require("express");
const { shopRegister } = require("../controller/shopController");

const router = express.Router();

router.route("/registerShop").post(shopRegister);

module.exports = router;
