// creating a root element to hold the elements using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// creating an h1 element
const heading = React.createElement("h1", {}, "Hello world! from React!");

// rendering the heading in the root using render() method
root.render(heading);