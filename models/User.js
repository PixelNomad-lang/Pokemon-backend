const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  address: String, // 👈 ye add karo
});

module.exports = mongoose.model("User", userSchema);
