import { LOGO_URL } from "../utils/constants";

export default function Header () {
  return (
    <header className="header">
      <div className="navContainer flex-sa">
        <div className="logocontainer">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul className="flex-center" style={{ gap: "2rem" }}>
            <li>Home</li>
            <li>Login</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </header>
  );
};