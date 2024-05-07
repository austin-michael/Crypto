import React from "react";

const SignUp = () => {
  return (
    <form className="sign-up-form">
      <h2>Sign Up</h2>

      <label htmlFor="email">Email</label>
      <input type="text" name="email" required />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" required />

      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;
