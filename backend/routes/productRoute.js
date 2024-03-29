const { Router } = require("express");
const express = require("express");
const {
  createProduct,
  getAllProducts,
  getMerchantProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getShopProducts,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

// CRUD -- Merchant
router
  .route("/merchant/product/new")
  .post(isAuthenticatedUser, authorizeRoles("merchant"), createProduct);
router
  .route("/merchant/products")
  .get(isAuthenticatedUser, authorizeRoles("merchant"), getMerchantProducts);
router
  .route("/merchant/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("merchant"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("merchant"), deleteProduct);

router.route("/shop/products/:id").get(getShopProducts)

// User End
router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);

// Reviews
router.route("/p/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/p/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, authorizeRoles("merchant"), deleteReview);

module.exports = router;
