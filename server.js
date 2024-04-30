const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const tourRoutes = require("./routes/tourRoutes");

mongoose
  .connect(
    "mongodb+srv://mabenblal:0z2Cdm5TiWGzKf9K@cluster0.auxy0zc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

const app = express();

app.use(express.static("Html"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoutes);
app.use("/tours", tourRoutes);

app.listen(3000, () => {
  console.log(`App running on port 3000...`);
});
