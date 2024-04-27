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

## Types of Components

1. `Functional Component`: New way (more preferred)

```jsx
// a function that return react elements
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

2. `Class Based Component`: Old way

## Rerendering

Updating the state and rerender (changing the DOM)

`'A state change'` triggers rerendering of DOM elements.

We define component once and when the state changes it triggers the rerendering phase and react takes care of rerendering.
