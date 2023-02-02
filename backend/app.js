const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/error");

app.use(express.json());
app.use(cookieParser());

// Import Routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const shop = require("./routes/shopRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", order);
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", shop);

// Middleware For Errors
app.use(errorMiddleware);

module.exports = app;
