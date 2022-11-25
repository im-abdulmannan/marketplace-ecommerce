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
// User End
router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);
// Reviews
router.route("/product/review").put(isAuthenticatedUser, createProductReview);
router
  .route("/product/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, authorizeRoles("merchant"), deleteReview);

module.exports = router;
