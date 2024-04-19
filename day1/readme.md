# Getting started with react.

## What is CDN?

- CDN stands for **Content Delivery Network.**
- CDN links are URLs of resources *(such as images, scripts, stylesheets, etc.)* hosted on a Content Delivery Network.
- A CDN is a network of distributed servers that work together to deliver content to users more efficiently.
- When a user requests a resource, the CDN serves it from the server closest to the user's location, which reduces latency and improves load times.

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