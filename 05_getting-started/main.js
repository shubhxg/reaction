import React from "react";
import ReactDOM from "react-dom/client";

const h3 = <h3>Practice, Practice, Practice</h3>;

const Title = () => {
  return <h1 className="heading">Welcome to my React App!</h1>;
};

const Paragraph = () => {
  return (
    <p className="para" style={{ "font-size": "1.2rem", color: "grey" }}>
      This is a paragraph of my heading! This is generated inside from a
      functional component.
    </p>
  );
};

const Heading = () => {
  return (
    <div id="container" style={{ "text-align": "center", "margin-top": "300px"}}>
      <Title />
      {h3}
      <Paragraph />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
 <Heading/>
);