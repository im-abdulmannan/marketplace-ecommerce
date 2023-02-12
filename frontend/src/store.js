import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  userReducer,
  userDetailsReducer,
  allUsersReducer,
  profileReducer,
  passwordReducer,
} from "./reducers/userReducer";

const reducers = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  review: reviewReducer,
  newReview: newReviewReducer,
  productReviews: productReviewsReducer,
  cart: cartReducer,
  user: userReducer,
  userDetails: userDetailsReducer,
  allUsers: allUsersReducer,
  profile: profileReducer,
  forgotPassword: passwordReducer,
});

let initialState = {};

const middleware = [thunk];

const store = legacy_createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;