const mongoose = require("mongoose");

const userdataSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model("Student", userdataSchema);
