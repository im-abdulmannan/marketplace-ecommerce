const express = require("express");
const {
  shopRegister,
  shopUpdate,
  shopDelete,
  getAllShops,
  getshopDetails,
} = require("../controller/shopController");

const router = express.Router();

router.route("/registerShop").post(shopRegister);
router.route("/updateShop/:id").put(shopUpdate);
router.route("/deleteShop/:id").delete(shopDelete);
router.route("/getAllShops").get(getAllShops);
router.route("/getShopDetails/:id").get(getshopDetails);

module.exports = router;
