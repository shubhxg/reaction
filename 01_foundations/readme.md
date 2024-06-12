# Foundations

## What is react?

A `javascript` library made by facebook and which is used to create large complex user interfaces of frontend.

## Why to learn react?

Makes it easy to build `complex frontend UI`. Modern UIs are built using libraries instead of making them from scratch (We don’t want to create a wheel again)

## When to learn react?

One should know javascript and DOM before react.

## Who made it?

Software engineer team at facebook.

## Why was it created?

To fix these issues:

- UI bugs such as phantom messages issue.
- Code complexity
- UI Inconsistency

## How did react fix this issue?

- `A component-based architecture` encourages a more modular and reusable code, making it easier for developers to manage and maintain their applications.
- `Virtual DOM` renders only those UI components that had changed, rather than re-rendering the entire page every time page was updated.

## Why it got hate in starting days?

Complexity of new library or learning a new tech and other bugs.

## What is SPA (Single page application)?

A type of web application or website that loads a single HTML page and dynamically updates that page as the user interacts with it.

React creates SPA (Single page applications) in which pages don’t reload.

## Is react still open source?

Yes

## What was the most famous way to do DOM manipulation before react
jquery was in demand before react became the standard way to do the DOM related work.

## What to learn in react?

- `State and UI manipulation`
- `JSX`
- `Component reusability`
- `Reusing components (props)`
- `Propagating changes (hooks)`
  - `useState()`
  - `useEffect()`
  - `useRef()`
  - `useCallback()`
  - `useContext()`
  - ...

## Additional learning after react

- `react router-dom`
- `state management` using redux, recoil, redux-toolkit, contextapi, zustand
- `class based components` (optional)
- `Backend as a service (BAAS)` such as appwrite, firebase, supabase,

## What after learning react

> React is not the full solution as it is bad for SEO of the page, browser rendering the html and css which makes websites a little slower, router related issues.

We can learn nextjs, remix, or gatsby after react.

## Browsers don’t understand React

Browsers only understand `html, css and javascript`. They dont understand react.

## Getting ready to use react in our project

We can use CDN links to connect and get react

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

Went to the CDN link and found that it has got a javascript file called `react.development.js` and it has lot of code on it.

What i noticed is i can see its the whole code for react library **“kind of”** could be wrong as well not sure, take a look here: [here](https://unpkg.com/react@18/umd/react.development.js)

## What the heck is CDN?

- CDN stands for **Content Delivery Network.**
- CDN links are URLs of resources _(such as images, scripts, stylesheets, etc.)_ hosted on a Content Delivery Network.
- A CDN is a network of distributed servers that work together to deliver content to users more efficiently.
- When a user requests a resource, the CDN serves it from the server closest to the user's location, which reduces latency and improves load times.

## Library vs. Framework

Library: A library is a collection of reusable code modules that can be directly called by an application to perform specific tasks. Libraries are focused on providing functionalities that developers can use as needed within their code. Makes it easier to work with complex code without even ever writing that functionality from scratch.

Framework: A framework provides a proper strict structure for building applications. It dictates the architecture of the application and provides a skeleton where the developer fills in the specifics. Frameworks tells a certain way of doing things.

## Cross Origin Resource Sharing

When you use a Content Delivery Network (CDN) to host static assets for your website, like images or Javascript files, those files are being served from a different domain than your main website. This difference in domain can cause security issues with modern web browsers. _(Browser crying noices - same origin policy)_

CORS is like a handshake between your website and CDN, saying it's okay to load resources from each other. It acts as a security check to prevent malicious scripts from loading unauthorized resources.

if header contains a cors then good ✅👍 otherwise bad and gets rejected 👎❌

## React element is an object not an html tag

if I print the typeof the element I created using createElement method I will see that it's an object

```jsx
typeof heading; // returns an object with some properties like type, prop
```

## Props

`Props` = `properties` (attributes that we passed) + `childrenElement`

```jsx
{ class:"heading", attribute: "value" },
	  "Hello world from react!"
```

## What is async and defer?

A: `Async` - The async attribute is a boolean attribute. The script is downloaded in parallel to parse the page, and executed as soon as it is available (does not block HTML DOM construction during downloading process).

```html
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.

```html
<script src="demo_defer.js" defer></script>
```

## Using type="module" in script tag
Unless you're supporting ancient legacy systems, always add `type="module"` to all your script tags:

```html
<script type="module" src="main.js"></script>
```

`<script defer nomodule>` can be used as a legacy fallback.

It allows you to import modules, which makes it easier to organize your code. Enable strict mode by default. Makes your code run faster, and reports more runtime errors instead of silently ignoring them. 

Execute your code only after the DOM has initialized, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events. Prevent top level variables from implicitly polluting the global namespace. Allow you to use top-level await in supported engines. Load and parse your code asynchronously, which improves load performance.
