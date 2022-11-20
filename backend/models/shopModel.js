const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Shop Name"],
  },
  slogan: {
    type: String,
    required: [true, "Please Enter Shop Slogan"],
    minLength: [8, "Slogan should be greater than 8 Characters"],
    maxLenght: [30, "Slogan should not be greater than 30 Charachters"],
  },
  description: {
    type: String,
    required: [true, "Please Enter Your Shop Details"],
    minLength: [30, "Minimum length of description should be 30 characters"],
  },
  shopEmail: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  shopContact: {
    type: Number,
    required: [true, "Please Enter Shop Contact"],
  },
  address: {
    type: String,
    required: [true, "Please Enter Your Shop Address"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Shop", shopSchema);
