const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Shop = require("../models/shopModel");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHandler = require("../utils/errorHandler");

// Register a Shop
exports.shopRegister = catchAsyncErrors(async (req, res, next) => {
  const { name, slogan, description, shopEmail, shopContact, address } =
    req.body;

  const shop = await Shop.create({
    name,
    slogan,
    description,
    shopEmail,
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

// Delete Shop -- Admin && Merchant
exports.shopDelete = catchAsyncErrors(async (req, res, next) => {
  const shop = await Shop.findById(req.params.id);

  if (!shop) {
    return next(new ErrorHandler("Shop not found", 404));
  }

  await Shop.remove();
  res.status(200).json({
    success: true,
    message: "Shop Deleted Successfully!",
  });
});

// Get All Shops
exports.getAllShops = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const shopsCount = await Shop.countDocuments();

  const apiFeature = new ApiFeatures(Shop.find(), req.query)
    .search()
    .filter()
    .pagination();

  let shops = await apiFeature.query;

  let filteredShopsCount = shops.length;

  apiFeature.pagination(resultPerPage);

  res.status(200).json({
    success: true,
    shops,
    resultPerPage,
    shopsCount,
    filteredShopsCount,
  });
});

// Get All Shops -- Admin
exports.getAdminShops = catchAsyncErrors(async (req, res, next) => {
  const shops = await Shop.find();

  res.status(200).json({
    success: true,
    shops,
  });
});

// Get Shop Details
exports.getshopDetails = catchAsyncErrors(async (req, res, next) => {
  const shop = await Shop.findById(req.params.id);

  if (!shop) {
    return next(new ErrorHandler("Shop not found", 404));
  }

  res.status(200).json({
    success: true,
    shop,
  });
});

// Review System
// Create Review
exports.createShopReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, shopId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const shop = await Shop.findById(shopId);

  const isReviewed = shop.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    shop.reviews.forEach((rev) => {
      if (rev.user.toString() === rev.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    shop.reviews.push(review);
    shop.numOfReviews = shop.reviews.length;
  }

  let avg = 0;

  shop.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  shop.ratings = avg / shop.reviews.length;

  await shop.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    review: shop.review,
  });
});

// Get All Reviews of a Single Shop
exports.getShopReviews = catchAsyncErrors(async (req, res, next) => {
  const shop = await Shop.findById(req.query.id);

  if (!shop) {
    return next(new ErrorHandler("Shop Not Found!", 404));
  }

  res.status(200).json({
    success: true,
    reviews: shop.reviews,
  });
});

// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const shop = await Shop.findById(req.query.shopId);

  if (!shop) {
    return next(new ErrorHandler("Shop Not Found", 404));
  }

  const reviews = shop.reviews.filter(
    (rev) => rev._id.toString() !== req.query.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Shop.findByIdAndUpdate(
    req.query.shopId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
    message: "Review Deleted Successfully!",
  });
});
