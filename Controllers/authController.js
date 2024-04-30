const signModel = require("../models");

exports.signUp = async (req, res) => {
  try {
    const data = new signModel({
      user: req.body.user,
      Email: req.body.Email,
      Password: req.body.Password,
      Title: req.body.Title,
      selectedCategory: req.body.selectedCategory,
      idNumber: req.body.idNumber,
      nCCP: req.body.nCCP,
      amount: req.body.amount,
      description: req.body.description,
      image: req.body.image,
    });
    await data.save();
    res.redirect("login.html");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating user");
  }
};

exports.login = async (req, res) => {
  try {
    const check = await signModel.findOne({ Email: req.body.email });
    if (check && check.Password === req.body.password) {
      res.send("SUCCESS!!!");
    } else {
      res.send("WRONG PASSWORD!!");
    }
  } catch (err) {
    res.send("WRONG DETAILS!!");
  }
};
