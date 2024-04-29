## JSX and why it looks like html

- `JSX` stands for `JavaScript XML`
- JSX uses a combination of both `XML type syntax` and `JavaScript`.
- `XML (Extensive Markup Language)` is a way to store and transport data between different computer systems.
- Since `XML` looks like `HTML` (both are markup languages) thats why `JSX` also have similar syntax.
- JSX is not HTML, JSX code gets converted into regular HTML, CSS and JS code before it runs in the browser.

This is how JSX code looks like:

```jsx
// Both HTML and JS combined into JSX
const UserCard = (props) => {
  return (
    <div className="user-card">
      <h2> {props.name} </h2>
      <p> Email: {props.email} </p>
    </div>
  );
};
```

> 💡 Note: `JSX` is not required for using `React`, it's used because it makes UI development in React easier.

## Babel Compiler

Since browsers can not understand react code, this code is `transpiled` into javascript code which could be understood by `JS Engine`.

`Parcel` uses `babel (JS compiler)` for transpilation.

`JSX` => `React.createElement (JS Object)` => `rendered as HTML code`

It converts new generation javascript code into browser compatible javascript.

> Note: Parcel uses babel behind the scenes but Vite doesnt use it, instead Vite directly supports native ES6 module approach so it doesnt rely on Babel.

Under the hood: `react` -> `compiler/transpiler` (npm run build) -> `html, css, js`

## State

An object representing the current state of the application. It represents dynamic things in your app (that change).

for exp:

```js
// object
const counterState = {
  counter: 1,
};

const linkedinTopBarState = {
  topbar: {
    home: 0,
    notifications: 14,
    jobs: 0,
  },
};
```

So any values that is dynamic on the page and might change is the `state`.

## Components

- A reusable part of a website / a component of a website.

- Components are reusable building blocks that we can use to create the different parts of web page.

- Components are independent and reusable in nature. Each component encapsulates its own logic, structure, and styling, and can be composed together with other components to create complex UI.

- Any part of the website that can change given a `state`
  - give a state of app
  - give components
  - give how states are connected to the components
  - react will take care of rerendering it

## Rerendering

Updating the state and rerender (changing the DOM)

`'A state change'` triggers rerendering of DOM elements.

We define component once and when the state changes it triggers the rerendering phase and react takes care of rerendering.

## Types of Components

1. `Functional Component`: New way (more preferred)
2. `Class Based Component`: Old way

## Functional Components

```jsx
// a function that return react elements is a functional component
// they start with a capital letter
const HeadingComp = () => {
  return (
    <div className = "container">
      <h1>Hello world!</h1>;
    </div>
  )
};

const ParagraphComp = () => (
  <div>
    <p> A paragraph </p>
  </div>
);

```

## Components vs. React Elements
```jsx
// this is a react element, it doesn't return anything
const headingElement = (
  <h1 className="heading">Hello world in React!</h1>
)

// this is a react functional component
const HeadingComp = () => {
  return <h1>This is a heading component</h1>
}

const HeadingComp = () => (
  <h1>This is a heading component</h1>
)

// The render() method in ReactDOM expects a React element, 
// which can be a component or a simple JSX element.

 // render a react element 
ReactDOM.createRoot(document.getElementById("root")).render (
 headingElement
);

// render a component
ReactDOM.createRoot(document.getElementById("root")).render (
 <HeadingComp />
);

```
## Component Composition

`Component Composition` in React refers to the practice of building complex user interfaces by combining and nesting multiple simpler components together.

```jsx
const Title = () => {
  return ( 
    <h1 className="heading">
      Welcome to my React App!
    </h1>
  )
}

const Paragraph = () => {
  return ( 
    <p className="para">
      This is a paragraph component.
    </p>
  )
}

// nesting Title and Paragraph inside Heading
const Heading = () => {
  return <div id="container">
    <Title />
    <Paragraph />
  </div>
};
```

## Injecting JavaScript inside JSX

We use `{}` to inject any javascript code inside jsx.

for example:

```jsx
const titleElement = (
    <h1 className="heading">
      Welcome to my React App!
    </h1>
)

// nesting Title and Paragraph inside Heading
const Heading = () => {
  return <div id="container">
    {titleElement}
  </div>
};
```

## Infinite Component Composition Loop
Nesting `Title` inside `Heading` and `Heading` inside `Title`. Basically an infinite loop.

```jsx
const Title = () => ( 
  <h1 className="heading">
    Welcome to my React App!
    <Heading/> 
  </h1>
)

const Heading = () => (
  <div id="container">
    <Title />
  </div>
);
```

> 📝 Note: Since we can nest anything inside anything thats why it's important to remember the foundations of `sementic HTML` and how html should be rendered otherwise we might end up creating very bad html page which is not good for `SEO` and `Accessibility`.

## Cross Site Scripting (XSS)

`Cross-Site Scripting (XSS)` is a type of security vulnerability that allows an attacker to inject malicious scripts into web pages.

It occurs when an application fails to properly validate and sanitize user input that is then included in the output HTML.

This can be a serious issue because an attacker can get access of everything about user such as their `cookie token`, they can read `local storage`, etc.

Example: 

```jsx
// fetching data from some API
const data = fetch("URL");

const h3 = <h3>Practice, Practice, Practice</h3>;

// injected in the title
const Title = () => {
  return <h1 className="heading">Welcome to my React App! {data} </h1>;
};
```

## JSX Escaping and Sanitizing Input

React provides built-in protection against XSS in the way it renders content. 

When rendering content in JSX, React automatically escapes certain characters that could potentially be used in XSS attacks, such as `<`, `>`, and `&`. 

However, this protection only applies to the content being rendered, not to the entire application.

To mitigate `XSS` vulnerabilities in your React application, you should follow these best practices:

1. `Use React's built-in escaping`: React automatically escapes certain characters in { expression }, but this is not a complete solution for preventing XSS.


2. `Sanitize user input`: If you're rendering user-provided data, you should sanitize or validate the input to remove any potential malicious code before rendering it.


3. `Use libraries for sanitization`: Consider using a dedicated library for sanitizing user input, such as `zod`, which provide more comprehensive protection against XSS attacks.

4. `Be cautious with dangerouslySetInnerHTML`: If you need to render raw HTML from an untrusted source, be extremely cautious when using dangerouslySetInnerHTML. Make sure to sanitize the HTML before rendering it to avoid XSS vulnerabilities.


5. `Keep dependencies up-to-date`: Regularly update your React and other library dependencies to ensure you have the latest security fixes and improvements.