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

*For example:*

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

A `config.json` file
```jsx
{
  "title": "Welcome to my App",
  "description": "This is a sample config-driven React component.",
  "buttonText": "Click me"
}
```
Using this `config file` to generate dynamic data on the page.
```jsx
import React from 'react';
import config from './config.json';

export default const MyComponent = () => {
  return (
    <div>
      <h1>{config.title}</h1>
      <p>{config.description}</p>
    </div>
  );
};
```