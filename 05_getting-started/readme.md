## JSX and why it looks like html and javascript in same file

- `JSX` stands for `JavaScript XML`
- JSX uses a combination of both XML type syntax and JavaScript. 
- `XML (Extensive Markup Language)` is a way to store and transport data between different computer systems.
- Since `XML` looks like `HTML` thats why `JSX` also have similar syntax.
- JSX is not HTML, JSX code gets converted into regular JavaScript code before it runs in the browser.

This is how XML code looks like:
```xml
<book>
  <title>The Lord of the Rings</title>
  <author>J.R.R. Tolkien</author>
  <year>1954</year>
</book>
```

This is how JSX code looks like:
```jsx

// Both combined into JSX 
function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}

```

> 💡 Note: `JSX` is not required for using `React`, it's used because it makes UI development in React easier.

## Babel Compiler
Since browsers can not understand react code, this code is transpiled into javascript code which could be understood by JS Engine.

Parcel uses `babel (JS compiler)` for transpilation.

`JSX` => `React.createElement (JS Object)` => `rendered as HTML code`

It converts next generation javascript code into browser compatible javascript.

> Note: Parcel uses babel behind the scenes but Vite doesnt use it, instead Vite directly supports native ES6 module approach so it doesnt rely on Babel.

Under the hood: `react` -> `compiler/transpiler` (npm run build) -> `html, css, js`

## State 

An object representing the current state of the application. It represents dynamic things in your app (that change).

for exp: 
```js
// object
const counterState = {
  counter: 1,
}

const linkedinTopBarState = {
  topbar: {
    home: 0,
    notifications: 14,
    jobs: 0,
  }
}
```

So anything that is dynamic on the page and might change is the `state`.

## Components

It is how DOM should render given a state. A reusable part of a website / a component of a website.

In React, components are reusable building blocks that you use to create the different parts of your web page. Each component can control its own little area of the screen.

They are independent since they don't rely on each other to work, and reusable because you can use the same component multiple times throughout your page.

Any part of the website that can change given a `state`

- given a state of app
- given components
- give how state is connected to the component
- react will take care of rerendering it

## Rerendering
Updating the state and rerender (changing the DOM)

`'A state change'` triggers rerendering of DOM elements.

We define component once and when the state changes it triggers the rerendering phase and react takes care of rerendering.