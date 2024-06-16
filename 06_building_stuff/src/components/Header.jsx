import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Header() {
  const [loginButton, setLoginButton] = useState("Login");
  const [groceryButtonText, setGroceryButtonText] = useState("Grocery");

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
            <Link to={groceryButtonText === "Grocery" ? "/grocery" : "/"}>
              <button
                className="grocery"
                style={{ maxWidth: "7rem" }}
                onClick={() =>
                  setGroceryButtonText(
                    groceryButtonText === "Grocery" ? "Go Back" : "Grocery"
                  )
                }
              >
                {groceryButtonText === "Go Back" && (
                  <svg
                    style={{ marginRight: "0.2rem" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                )}
                {groceryButtonText}
              </button>
            </Link>
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
