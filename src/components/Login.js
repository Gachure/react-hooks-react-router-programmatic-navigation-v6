import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  const login = useOutletContext(); // Use Outlet context to access the login function
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    login(); // Call login function when form is submitted
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label> {/* Use htmlFor */}
      <input
        id="username"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
