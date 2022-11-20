const express = require("express");
const {
  shopRegister,
  shopUpdate,
  shopDelete,
  getAllShops,
  getshopDetails,
  getAdminShops,
} = require("../controller/shopController");

const router = express.Router();

router.route("/shop/new").post(shopRegister);
router.route("/merchant/shop/:id").put(shopUpdate).delete(shopDelete);
router.route("/shops").get(getAllShops);
router.route("/admin/shops").get(getAdminShops)
router.route("/shop/:id").get(getshopDetails);

module.exports = router;
