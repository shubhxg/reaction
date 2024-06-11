import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <header className="header">
      <div className="navContainer flex-sa">
        <div className="logocontainer">
          <Link to="/">
            <img className="logo" src={LOGO_URL} alt="Logo" />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="flex-center" style={{ gap: "2rem" }}>
            <Link to="/contactus">
              <li style={{ maxWidth: "7rem" }}>Contact Us</li>
            </Link>
            <Link to="/about">
              <li style={{ maxWidth: "7rem" }}>About Us</li>
            </Link>
            <li>Cart</li>
            <button
              onClick={() => {
                loginButton === "Login"
                  ? setLoginButton("Logout")
                  : setLoginButton("Login");
              }}
            >
              {loginButton}
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}
