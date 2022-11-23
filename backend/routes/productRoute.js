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

const router = express.Router();

// CRUD -- Merchant
router.route("/merchant/product/new").post(createProduct);
router.route("/merchant/products").get(getMerchantProducts);
router.route("/merchant/product/:id").put(updateProduct).delete(deleteProduct);
// User End
router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);
// Reviews
router.route("/product/review").put(createProductReview);
router.route("/product/reviews").get(getProductReviews).delete(deleteReview);

module.exports = router;
