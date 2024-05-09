## Returning multiple elements in JSX

- JSX is stricter than HTML. You have to close tags like `<br />`.
- Your component also can’t return multiple JSX elements. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper

## Styling in JSX

- JSX uses `className` instead of `class`
- To inject CSS into JSX you have to write it like this `style = {{"property": "value"}}` since JS requires Object of styles.
- `style={{}}` is not a special syntax, but a regular js `object` inside the `style={ }` JSX curly braces.

## Planning and Building Application

In order to build any application or webapp, first we should plan out things, We need a `wireframe` which guides about the design approach of the application. This ensures we build only things that are required.

Each part of application can be built as a `component` separately.

_For example:_

<details>
<summary><strong>Header</strong></summary>

- Logo
- Nav items
</details>

<details>
<summary><strong>Main</strong></summary>

- Search
- Cards Container
  - Cards
  </details>

<details>
<summary><strong>Footer</strong></summary>

- Copyright section
- Links
- Address Info
- Contact Info
</details>

## Component Reusability

Each component should be built once and not again and again, meaning DRY principle, this means only one component and then we can reuse those components.

## `Props`

In React, `props` (short for properties) are a way to pass data from a parent component to a child component. They are inputs to the child component and allow components to be reusable with different data.

You can think of props as args given to the function.

### Passing props to a component 👇

```jsx
// this is function receiving the props
const CardRestro = (props) => {
  return (
    // something
  )
}

// Accepting values as props but destructured while accepting
const CardRestro = ({property1, property2}) => {
  return (
    // something
  )
}

// sending props
<CardRestro
  property1 = "value1"
  property2 = "value2"
  property3 = "value3"
  property4 = "value4"
/>

// this above properties gets wrapped as an object and passed as props

```

Props are used when we want to `pass data dynamically to a component`.

## Config Driven UI

It is an approach to building user interfaces where the `structure, layout, and behavior` of the `UI components` are defined in a separate `configuration file`, rather than being hard-coded.

In this architecture, the UI components are typically defined using a structured data format, such as `JSON` or `YAML`.

This configuration file acts as a `blueprint` for the `UI`, specifying the components to be rendered, their properties, layout, and interactions.

Example:

A `config.json` file is sent by Backend to the frontend.

```jsx
{
  "title": "Welcome to my App",
  "description": "This is a sample config-driven React component.",
  "buttonText": "Click me"
}
```

Using this `config file` to generate dynamic data on the page.

```jsx
import React from "react";
import config from "./config.json";

export default MyComponent = () => {
  return (
    <div>
      <h1>{config.title}</h1>
      <p>{config.description}</p>
    </div>
  );
};
```

So you write component once and now according to config data `UI will change`.

A good developer should know when and what type of data should be received or sent.

## Handling nested complex data

```jsx
// taking these nested values as props

const CardRestro = ({ name, areaName, cuisines, avgRating, slaString }) => {
  return (
    // something
  )
}

// sending props

<CardRestro {...resData.info} />
```

The values inside the resData.info will be spread out

## Accessing dynamic data and rendering it

```jsx
<div className="cards-container flex-center">
  {/* sending cards with props for each card */}
  {/*we are accessing this data from resDataList which is an array of objects*/}
  <CardRestro {...resDataList[0].info} />
  <CardRestro {...resDataList[1].info} />
  <CardRestro {...resDataList[2].info} />
  <CardRestro {...resDataList[3].info} />
  <CardRestro {...resDataList[4].info} />
  <CardRestro {...resDataList[5].info} />
</div>
```

For image, I basically concatenated the `swiggyimageurl` with the `cloudinaryImageId` and used that for image.

```jsx
const imgURL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
return (
  <div className="card-restro">
    <img
      className="card-img"
      alt="restraunt image"
      src={imgURL + cloudinaryImageId}
    />
);
```

To make sure my cuisines dont end up too long I sliced it for 2 places and then joined with a comma.

And that's how we achieve dynamic behaviour of website using data from a config file. For now this config file is acting as a restaurant data file `resDataList.js`