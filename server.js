require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const webRoutes = require("./routes/routeAPI");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/crud/methods", webRoutes);

const port = process.env.PORT;
const uri = process.env.MONGO_URI;

// connect to db
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(port, () => {
      console.log("listening for requests on port", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
