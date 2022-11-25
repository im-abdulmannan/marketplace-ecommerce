const express = require("express");
const {
  shopRegister,
  shopUpdate,
  shopDelete,
  getAllShops,
  getshopDetails,
  getAdminShops,
} = require("../controller/shopController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router
  .route("/shop/new")
  .post(isAuthenticatedUser, authorizeRoles("merchant"), shopRegister);

router
  .route("/merchant/shop/:id")
  .put(isAuthenticatedUser, authorizeRoles("merchant"), shopUpdate)
  .delete(isAuthenticatedUser, authorizeRoles("merchant"), shopDelete);

router.route("/shops").get(getAllShops);
router.route("/admin/shops").get(getAdminShops);
router.route("/shop/:id").get(getshopDetails);

module.exports = router;
