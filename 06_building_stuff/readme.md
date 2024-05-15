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

## `Props` 🥠

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

## Config Driven UI 🖼️

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

// sending props, The values inside the resData.info will be spread out

<CardRestro {...resData?.info} />
```

## Using map to loop over array and render all the components ➿

```jsx
<div className="cards-container flex-center">
  {resDataList.map((item) => (
    <CardRestro {...item?.info} />
  ))}
</div>
```

This above code means map over `resDataList` array and select each `item` and then `render` it's `info` data after `spreading` values and sending as `props`.

## Unique Key for components and why we need them 🔑

Each child component when rendered as a list should have a unique id that represents it. This is to optimize react working and it requires a key to ensure that it is only rendering new component and not rerendering all the components again.

If there are no ids on the child component, react will `rerender` all the child component when a new child component is rendered, this is why because react does not know which item is unique and It will treat all as same. So always give a unique id to your child components when rendered as list items.

This id is given using `key` can be generated or can be present in the list itself many times.

```jsx
<div className="cards-container flex-center">
  {resDataList.map((item) => (
    <CardRestro {...item?.info} key={item.info.id} />
  ))}
</div>
```

In this case my list already has a unique key to it, so I am accessing it.

## Why not use index as key values 🔑

Try to not use `index` as a `key`, but if you forgot to use a key explicitely then react itself uses `index` as a `key` for `unique id`.

This is because index used as a key is an `anti-pattern`, so if you use index as a key and when you add a new item in the list index changes, and then react gets confused as which component is having which properties.

It's a bad practice. So ask your backend developer to send a unique ID for all those data items.

So, `Unique ID` is better than `Index` is better than `no key`.

## Exporting and Importing 📤

1. Default: `export default nameOfSomething` at the end of the file, and `import Something from "path"`

2. Named: multiple exports and imports from single file.
   `export const something`, `import {something} from "path"`

## Making API calls to fetch data

2 ways but second way is better for UX.

1. `Website loads` -> `API call` -> `render UI`
2. `Website loads` -> `render skeleton data` -> `API call` -> `re-render data`

## Hooks 🪝

JavaScript Utility functions that are created for React library to ease up dom manipulation.

### 1. `useState()`

allows you to add state to functional components. State refers to data that can change over time.

It takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update that state value.

```jsx
const [state, setState] = useState(initialState);
```
    
So, in summary, this line initializes a state variable `var` with the value `data` and provides a setter function `setVar` to update that state variable in the future.

```jsx
<button className="filter-btn" 
  onClick={() => {
    setRestaurantData(
      restaurantData.filter((item) => item.info.avgRating >= 4)
    );
  }}
>   

// onClick is a evenHandler function that takes a callback and it updates the function with a filtered array.
```

> Note: Whenever a state variable changes/updates, react rerenders the component.

### 2. `useEffect()` 

The useEffect hook is called after every render, including the first render.

It is used to handle tasks such as data fetching, subscriptions, or manually changing the DOM from React components. 


```jsx
useEffect(useEffectCallBack, []);

function useEffectCallBack () {
  // do something
}
```

As soon as the render cycle of react component is finished, useEffect() is invoked. So whnever you want to do something after rendering the component then write that code in callback.

## Shimmer UI / Skeleton UI

A type of fake card that is rendered until the data is fetched, better UX.

Load the page -> Render Skeleton UI -> Fetch Data -> Render data.