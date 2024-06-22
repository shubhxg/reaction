import { LOGO_URL } from "../utils/data/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [loginButton, setLoginButton] = useState("Login");
  const [groceryButtonText, setGroceryButtonText] = useState("Grocery");

  return (
    <header className="sticky top-0 z-10 py-3 px-52 bg-white text-gray-800 shadow">
      <div className="flex justify-between">
        <div className="logo flex items-center">
          <Link to="/">
            <figure>
              <img className="rounded-xl w-10" src={LOGO_URL} alt="Logo" />
            </figure>
          </Link>
          <Link to="/">
            <span className="mx-4 cursor-pointer text-lg font-bold text-rose-600">
              FoodHub🍴
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center text-gray-800 font-bold">
          <ul className="flex gap-16 items-center">
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <li>Cart</li>
            <Link to={groceryButtonText === "Grocery" ? "/grocery" : "/"}>
              <button
                className="grocery px-4 py-2 rounded hover:bg-green-500 flex items-center justify-center"
                onClick={() =>
                  setGroceryButtonText(
                    groceryButtonText === "Grocery" ? "Go Back" : "Grocery"
                  )
                }
              >
                {groceryButtonText === "Go Back" ? (
                  <svg
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
                ) : (
                  <img
                    className="w-6 mr-2"
                    src="https://www.svgrepo.com/show/3868/groceries.svg"
                  ></img>
                )}
                {groceryButtonText}
              </button>
            </Link>
            <button
              className="py-2 px-6 bg-rose-600 text-white rounded"
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
