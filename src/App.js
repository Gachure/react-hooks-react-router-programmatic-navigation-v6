import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Go to Home
    } else {
      navigate("/login"); // Go to Login
    }
  }, [isLoggedIn, navigate]); // Include 'navigate' in dependency array

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <NavBar logout={logout} />
          <Outlet context={login} />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}

export default App;
