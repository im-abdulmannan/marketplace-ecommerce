const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Import Routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const shop = require("./routes/shopRoute");
const order = require("./routes/orderRoute");
// const payment = require("./routes/paymentRoute");

app.use("/api/v1", order);
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", shop);
// app.use("/api/v1", payment);

// Middleware For Errors
app.use(errorMiddleware);

module.exports = app;
