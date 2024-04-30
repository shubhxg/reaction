import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/components/Header";
import Hero from "/components/Hero";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
