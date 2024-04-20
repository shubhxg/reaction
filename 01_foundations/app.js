// Core react

// creating a root element to hold the elements using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// creating an h1 element
// react element created by createElement is an object
// createElement takes 3 arguments: element which you want to make, attributes object
// and textContent of the element.

const heading = React.createElement(
  "h1",
  { class: "heading" },
  "Hello world! from React!"
);

/* 
  <div class="div" id="parent">
    <div class="div" id="child">
      <h1 class="heading">
        Heading1
      </h1>
      <h2 class="heading">
        Heading2
      </h2>
    </div>
    <div class="div" id="child2">
      <h1 class="heading">
        Heading1
      </h1>
      <h2 class="heading">
        Heading2
      </h2>
    </div>
    <div class="div" id="child3">
      <h1 class="heading">
        Heading1
      </h1>
      <h2 class="heading">
        Heading2
      </h2>
    </div>
  </div>; 
*/

// creating above structure using nesting createElement methods
// passed an array of elements which act as siblings
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

// things making sense with the above code but its getting complicated slowly
// this is why we need jsx syntax

// render(reactElement {object}) => HTML Tag rendered on the DOM (Browser understands)
root.render(parent);
