const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { class: "heading" },
  "Hello world! from React!"
);


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
