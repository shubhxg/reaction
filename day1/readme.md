# Day 1

## What is react?

A `javascript` library which is used to create large complex user interfaces for frontend.

## Why to learn react?

Makes it easy to build `complex frontend UI`. Modern UIs are built using libraries instead of making them from scratch (We don’t want to create a wheel again)

## When to learn react?

One should know javascript and DOM before react.

## Who made react?

Software engineer team at `facebook (meta)`.

## Why was it created?

To fix these issues:

- UI bugs such as phantom messages issue
- Code complexity
- UI Inconsistency

## How did react fix this issue?

- `A component-based architecture` encourages a more modular and reusable code, making it easier for developers to manage and maintain their applications.
- `Virtual DOM` renders only those UI components that had changed, rather than re-rendering the entire page every time page was updated.

## Why it got hate in starting days?

Complexity of new library or learning a new tech, a new learning curve and some initial bugs.

## Is react still open source?

Yes

## Browsers don’t understand React

Browsers only understand `html, css and javascript`. They dont understand react.

## Getting ready to use react in our project

We can use CDN links to connect and get react

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

Went to the CDN link and found that it has got a javascript file called `react.development.js` and it has lot of code on it.

What i noticed is i can see its the whole code for react library **“kind of”** could be wrong as well not sure, take a look here: [here](https://unpkg.com/react@18/umd/react.development.js)

## What the heck is CDN?

- CDN stands for **Content Delivery Network.**
- CDN links are URLs of resources *(such as images, scripts, stylesheets, etc.)* hosted on a Content Delivery Network.
- A CDN is a network of distributed servers that work together to deliver content to users more efficiently.
- When a user requests a resource, the CDN serves it from the server closest to the user's location, which reduces latency and improves load times.

## Library vs. Framework

Library: A library is a collection of reusable code modules that can be directly called by an application to perform specific tasks. Libraries are focused on providing functionalities that developers can use as needed within their code. Makes it easier to work with complex code without even ever writing that functionality from scratch.

Framework: A framework provides a proper strict structure for building applications. It dictates the architecture of the application and provides a skeleton where the developer fills in the specifics. Frameworks tells a certain way of doing things.

## Cross Origin Resource Sharing

When you use a Content Delivery Network (CDN) to host static assets for your website, like images or Javascript files, those files are being served from a different domain than your main website. This difference in domain can cause security issues with modern web browsers. *(Browser crying noices - same origin policy)*

CORS is like a handshake between your website and CDN, saying it's okay to load resources from each other. It acts as a security check to prevent malicious scripts from loading unauthorized resources.

if header contains a cors then good ✅👍 otherwise bad and gets rejected 👎❌