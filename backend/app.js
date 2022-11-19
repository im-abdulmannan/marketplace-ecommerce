const express = require("express");
const app = express();

const errorMiddleware = require("./middlewares/error");

app.use(express.json());

// Import Routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const shop = require("./routes/shopRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", shop);

// Middleware For Errors
app.use(errorMiddleware);

module.exports = app;
