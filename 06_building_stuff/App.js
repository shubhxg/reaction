import React from "react";
import ReactDOM from "react-dom/client";
import { resData } from "./resData";

const Header = () => {
  return (
    <header className="header">
      <div className="navContainer flex-sa">
        <div className="logocontainer">
          <img
            className="logo"
            src="https://www.thefoodaholic.co.uk/wp-content/uploads/2014/05/MgJ-nIJ2.png"
            alt="Logo"
          />
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

const CardRestro = ({
  name,
  areaName,
  cuisines,
  avgRating,
  sla: { slaString },
}) => {
  return (
    <div className="card-restro">
      <img
        className="card-img"
        alt="restraunt image"
        src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg"
      />
      <h3>{name}</h3>
      <div className="starSpan">
        <span>⭐ {avgRating}</span>
        <span> | {slaString}</span>
      </div>
      <div className="tagSpan">
        <span>
          {cuisines.join(", ")} | {areaName}
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="search-container">
        <input placeholder="Enter food name" type="text" />
        <button>Search</button>
      </div>
      <h2>Top restaurants near you</h2>
      <div className="cards-container flex-center">
        <CardRestro {...resData.info} />
      </div>
    </section>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
