const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Email is invalid"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
});

// salt and hash password before it is saved to the db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and Password are required.");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid login credentials.");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid login credentials.");
  }

  return user;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
