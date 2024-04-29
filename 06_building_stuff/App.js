import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>React App</h1>
        <img />
      </div>
      <div className="nav-items"></div>
    </div>
  );
}

const HeroSection = () => {
  
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
<AppLayout />
);