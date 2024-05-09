import React from "react";
import ReactDOM from "react-dom/client";
import { resDataList } from "./resDataList";

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
  cloudinaryImageId,
  sla: { slaString },
}) => {
  // dynamic url grabbed from swiggy images
  const imgURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="card-restro">
      <img
        className="card-img"
        alt="restraunt image"
        src={imgURL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <div className="starSpan">
        <span>⭐ {avgRating}</span>
        <span> | {slaString}</span>
      </div>
      <div className="tagSpan">
        <span>
          {cuisines.slice(0, 2).join(", ")} | {areaName}
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
        {/* sending cards with props for each card */}
        <CardRestro {...resDataList[0].info} />
        <CardRestro {...resDataList[1].info} />
        <CardRestro {...resDataList[2].info} />
        <CardRestro {...resDataList[3].info} />
        <CardRestro {...resDataList[4].info} />
        <CardRestro {...resDataList[5].info} />
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
