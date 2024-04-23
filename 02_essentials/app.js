import React from "react"; // importing from node_modules
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { class: "div", id: "parent" }, [
  React.createElement("div", { class: "div", id: "child" }, [
    React.createElement("h1", { class: "heading" }, "Heading1"),
    React.createElement(
      "h2",
      { class: "heading" },
      "Heading2, A sibling of h1"
    ),
  ]),
  React.createElement("div", { class: "div", id: "child2" }, [
    React.createElement("h1", { class: "heading" }, "Heading1"),
    React.createElement(
      "h2",
      { class: "heading" },
      "Heading2, A sibling of h1"
    ),
  ]),
  React.createElement("div", { class: "div", id: "child3" }, [
    React.createElement("h1", { class: "heading" }, "Heading1"),
    React.createElement(
      "h2",
      { class: "heading" },
      "Heading2, A sibling of h1"
    ),
  ]),
]);

root.render(parent);
