# React Introduction

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

