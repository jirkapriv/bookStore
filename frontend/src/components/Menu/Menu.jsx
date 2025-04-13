import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded && decoded.id) {
          setIsLoggedIn(true);
          setRole(decoded.role);
        }
      } catch (error) {
        console.error("Invalid token", error);
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setRole(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setRole(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          BookStore
        </Link>

        <div className="d-flex align-items-center gap-3">
          {isLoggedIn ? (
            <>
              <span className="fw-bold">Role: {role}</span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/user/register"
                className="btn btn-outline-primary btn-sm"
              >
                Register
              </Link>
              <Link to="/user/login" className="btn btn-outline-success btn-sm">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
