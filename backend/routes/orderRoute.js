const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/merchant/orders")
  .get(isAuthenticatedUser, authorizeRoles("merchant"), getAllOrders);

router
  .route("/merchant/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("merchant"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("merchant"), deleteOrder);

module.exports = router;
