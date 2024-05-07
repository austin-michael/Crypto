const User = require("../models/User");

// handle errors
const handleErrors = (error) => {
  let errors = { email: "", password: "" };

  // duplicate errors
  if (error.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  // validation errors
  if (error.message.includes("user validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = (req, res) => {
  console.log(req.body);
  res.send("user login");
};
