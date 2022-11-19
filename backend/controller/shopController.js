const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Shop = require("../models/shopModel");
const ErrorHandler = require("../utils/errorHandler");

// Register a Shop
exports.shopRegister = catchAsyncErrors(async (req, res, next) => {
  const { name, slogan, description, shopContact, address } = req.body;

  const shop = await Shop.create({
    name,
    slogan,
    description,
    shopContact,
    address,
  });

  res.status(201).json({
    success: true,
    shop,
  });
});

// Update Shop
exports.shopUpdate = catchAsyncErrors(async (req, res, next) => {
  let shop = await Shop.findById(req.params.id);

  if (!shop) {
    return next(new ErrorHandler("Shop not found", 404));
  }

  // Images cloudinary

  shop = await Shop.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Shop Updated Successfully!",
    shop,
  });
});

// Delete Shop
exports.shopDelete = catchAsyncErrors(async (req, res, next) => {
  const shop = await Shop.findById(req.params.id);

  if (!shop) {
    return next(new ErrorHandler("Shop not found", 404));
  }

  await shop.remove();
  res.status(200).json({
    success: true,
    message: "Shop Deleted Successfully!",
  });
});
