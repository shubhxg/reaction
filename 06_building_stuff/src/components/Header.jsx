import { LOGO_URL } from "../utils/data/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [loginButton, setLoginButton] = useState("Login");
  const [groceryButtonText, setGroceryButtonText] = useState("Grocery");

  return (
    <header className="sticky top-0 z-20 py-3 px-52 bg-white shadow-[0_35px_60px_-30px_rgba(0,0,0,0.3)] text-gray-800">
      <div className="flex justify-between">
        <div>
          <a href="/" className="logo flex items-center">
            <figure>
              <img className="rounded-xl w-10" src={LOGO_URL} alt="Logo" />
            </figure>
            <span className="mx-4 cursor-pointer text-lg font-bold text-rose-600">
              {groceryButtonText === "Grocery" ? "FoodHub 🍴" : "GroceryHub 🥕"}
            </span>
          </a>
        </div>
        <div className="flex items-center justify-center text-gray-800 font-bold">
          <ul className="flex gap-16 items-center">
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <li>Cart</li>
            <Link to={groceryButtonText === "Grocery" ? "/grocery" : "/"}>
              <button
                className="grocery px-4 py-2 rounded hover:bg-green-500 hover:text-white flex items-center justify-center"
                onClick={() =>
                  setGroceryButtonText(
                    groceryButtonText === "Grocery" ? "Go Back" : "Grocery"
                  )
                }
              >
                {groceryButtonText === "Go Back" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-arrow-left pr-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                ) : (
                  <svg
                    className="pr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232,64H203.31l26.35-26.34a8,8,0,0,0-11.32-11.32L192,52.69V24a8,8,0,0,0-16,0V56.57a64,64,0,0,0-77.2,10.12l0,0,0,0,0,0c-40.1,39.39-70.25,133.08-73.19,142.45a16,16,0,0,0,21.26,21.26c9.37-2.94,103.18-33.13,142.47-73.21A64,64,0,0,0,199.43,80H232a8,8,0,0,0,0-16Zm-54.12,82c-8.94,9.12-21.25,17.8-34.85,25.73l-25.38-25.39a8,8,0,0,0-11.32,11.32l22.09,22.09c-40.87,21.19-86.32,35.42-87,35.63A7.93,7.93,0,0,0,40,216a7.93,7.93,0,0,0,.59-1.41c.29-.93,28-89.58,64-130.67l33.77,33.77a8,8,0,0,0,11.32-11.32L116.18,72.88A48,48,0,0,1,177.88,146Z"></path>
                  </svg>
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
