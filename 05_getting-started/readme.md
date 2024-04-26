## JSX and why it looks like html and javascript in same file

- `JSX` stands for `JavaScript XML`
- JSX is a combination of `XML` and `Javascript`.
- JSX is kind of inspired by `XML syntax` structure which is used for structuring data. 
- `XML (Extensive Markup Language)` is a way to store and transport data between different computer systems.
- Since `XML` looks like `HTML` thats why `JSX` also have similar syntax in which we can write html without any problem.
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

// javascript code
const name = "Alice";

// XML/HTML like code
<h1>Hello, {name}!</h1> 

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

> 💡 Note: `JSX` is not required for using `React`, it's used because it makes UI development in React more intuitive and readable.

## Babel Compiler
Since browsers can not understand react code, this code is transpiled into javascript code which then javascript engine can understand.

Parcel uses `babel` for transpilation.

`JSX` => `React.createElement (JS Object)` => `rendered as HTML code`

This is done by `Babel` which is a javascript compiler.

It converts next generation javascript code into browser compatible javascript.

> Note: Parcel uses babel behind the scenes but Vite doesnt use it, instead Vite directly supports native ES6 module approach so it doesnt rely on Babel.