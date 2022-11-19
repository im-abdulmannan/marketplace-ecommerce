const app = require("./app");
const connectDatabase = require("./config/database");

// const connectDatabase = require("./config/database");

// Handled unCaught Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to Handled Uncaught Error`);

  process.exit(1);
});

// Config

if (process.env.NODE_ENV !== "PRODCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting Database

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
