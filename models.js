const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true, trim: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Title: { type: String, required: true },
  selectedCategory: { type: String, required: true },
  idNumber: { type: Number, required: true },
  nCCP: { type: Number, required: true },
  amount: { type: Number, required: true },
  description: { type: String, trim: true, required: true },
  image: { type: [String], required: true },
});

const signModel = mongoose.model("signModel", signUpSchema);

module.exports = signModel;
