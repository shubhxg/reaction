import React from "react";
import ReactDOM from "react-dom/client";

// jsx is not html its javascript xml 
const jsxHeading = <h1 className="heading">Hello world in React!</h1>;

ReactDOM.createRoot(document.getElementById('root')).render(
  jsxHeading
);