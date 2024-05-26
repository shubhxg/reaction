import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export default function Header() {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <header className="header">
      <div className="navContainer flex-sa">
        <div className="logocontainer">
          <a href="/">
            <img className="logo" src={LOGO_URL} alt="Logo" />
          </a>
        </div>
        <div className="nav-items">
          <ul className="flex-center" style={{ gap: "2rem" }}>
            <a href="/contactus">
              <li style={{ "max-width": "7rem" }}>Contact Us</li>
            </a>
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
