import React from "react";
import ReactDOM from "react-dom/client";

// this is a react element
const headingElement = (
  <h1 className="heading">Hello world in React!</h1>
)

// react functional component
const HeadingComp = () => {
  return <h1>This is a heading component!</h1>
}

ReactDOM.createRoot(document.getElementById("root")).render (
 <HeadingComp />
);