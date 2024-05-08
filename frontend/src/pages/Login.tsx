import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
