const express = require("express");
const {
  shopRegister,
  shopUpdate,
  shopDelete,
  getAllShops,
  getshopDetails,
  getAdminShops,
  createShopReview,
  getShopReviews,
  deleteReview,
} = require("../controller/shopController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router
  .route("/merchant/shop/new")
  .post(isAuthenticatedUser, authorizeRoles("merchant"), shopRegister);

router
  .route("/merchant/shop/:id")
  .put(isAuthenticatedUser, authorizeRoles("merchant"), shopUpdate)
  .delete(isAuthenticatedUser, authorizeRoles("merchant"), shopDelete);

router.route("/shops").get(getAllShops);
router.route("/shop/:id").get(getshopDetails);

router
  .route("/admin/shops")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminShops);

// Reviews System -- Shops
router.route("/s/review").put(isAuthenticatedUser, createShopReview);
router
  .route("/s/reviews")
  .get(getShopReviews)
  .delete(isAuthenticatedUser, authorizeRoles("merchant"), deleteReview);

module.exports = router;
