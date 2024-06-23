# Table of Contents

1. [Returning multiple elements in JSX](#returning-multiple-elements-in-jsx)
2. [Styling in JSX](#styling-in-jsx)
3. [Planning and Building Application](#planning-and-building-application)
4. [Component Reusability](#component-reusability)
5. [Props](#props)
6. [Config Driven UI](#config-driven-ui)
7. [Handling nested complex data](#handling-nested-complex-data)
8. [Using map to loop over array and render all the components](#using-map-to-loop-over-array-and-render-all-the-components)
9. [Unique Key for components and why we need them](#unique-key-for-components-and-why-we-need-them)
10. [Why not use index as key values](#why-not-use-index-as-key-values)
11. [Exporting and Importing](#exporting-and-importing)
12. [Making API calls to fetch data](#making-api-calls-to-fetch-data)
13. [Hooks](#hooks)
14. [Shimmer UI / Skeleton UI](#shimmer-ui--skeleton-ui)
15. [Conditional rendering](#conditional-rendering)
16. [Making the input box work](#making-the-input-box-work)
17. [Class Based Components](#class-based-components)
18. [Component Life Cycle](#component-life-cycle)
19. [Phases of lifecycle of react components](#phases-of-lifecycle-of-react-components)
20. [Some more nitty gritty details about lifecycle and hooks](#some-more-nitty-gritty-details)
21. [Custom Hooks](#custom-hooks)
22. [Optimization to build a large scale application](#optimization-to-build-a-large-scale-application)
23. [Lazy Loading / On Demand loading](#lazy-loading--on-demand-loading)

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

## Props

In React, `props` (short for properties) are a way to pass data from a parent component to a child component. They are inputs to the child component and allow components to be reusable with different data.

You can think of props as args given to the function.

### Passing props to a component

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

## Unique Key for components and why we need them

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

## Why not use index as key values

Try to not use `index` as a `key`, but if you forgot to use a key explicitely then react itself uses `index` as a `key` for `unique id`.

This is because index used as a key is an `anti-pattern`, so if you use index as a key and when you add a new item in the list index changes, and then react gets confused as which component is having which properties.

It's a bad practice. So ask your backend developer to send a unique ID for all those data items.

So, `Unique ID` is better than `Index` is better than `no key`.

## Exporting and Importing

1. Default: `export default nameOfSomething` at the end of the file, and `import Something from "path"`

2. Named: multiple exports and imports from single file.
   `export const something`, `import {something} from "path"`

## Making API calls to fetch data

2 ways but second way is better for UX.

1. `Website loads` -> `API call` -> `render UI`
2. `Website loads` -> `render skeleton data` -> `API call` -> `re-render data`

## Hooks

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

function useEffectCallBack() {
  // do something
}
```

As soon as the render cycle of react component is finished, useEffect() is invoked. So whnever you want to do something after rendering the component then write that code in callback.

- If there is `no dependency array`, then the callback is `invoked after every render cycle of components`.

- If there is a `dependency array`, then the callback is `invoked only when the dependency changes`.

- If there is a `empty dependency array`, then the callback is `invoked only once after the first render cycle`.

## Shimmer UI / Skeleton UI

A type of fake type of UI that is rendered until the data is fetched and rendered, better UX.

Load the page -> Render Skeleton UI -> Fetch Data -> Render data.

## Conditional rendering

```jsx
return if_condition_is_true ? return_this : else_return_this;

// if else-if else conditional rendering
return if_condition_is_true
  ? return_this
  : else_if_this_second_condition_is_true
  ? return_this
  : else_return_this;
// and so on
```

## Making the input box work

```jsx
<input
  placeholder="Enter food name"
  type="text"
  onChange={(e) => {
    setSearchTerm(e.target.value);
  }}
  value={searchTerm}
/>
```

we get the value from the input box using `onChange()` method and we use that to update the `value` of the input box.

`onChange()` method takes a callback(e) where e is the event which is used to get the target's value.

## Class Based Components

We create instance of a class and then use it to render jsx.

```jsx
class ClassName extends React.Component {
  render() {
    return <div></div>;
  }
}
```

### Receiving props to a class based component

```jsx
class ClassName extends React.Component {
  constructor(props) {
    super(props); // this is required to receive props because we are extending React.Component
    // super refers to the parent class's constructor. In React, the parent class is `React.Component`
    // If you don't call super(props), this.props will be undefined in the constructor
  }

  render() {
    return <div></div>;
  }
}
```

### Creating state in class based components and setting the state

```jsx
class ClassName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 10,
    };
  }

  render() {
    const { count1, count2 } = this.state;
    return (
      <div>
        {(count1, count2)}
        <button
          // using setState() method to update the state
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Add +1
        </button>
      </div>
    );
  }
}
```

## Component Life Cycle

1. `constructor()` is called when the component is mounted.
2. `render()` is called after constructor().

if there are children components inside a component then, parent constructor -> parent render -> child constructor -> child render -> child componentDidMount() -> parent componentDidMount()

```jsx
constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    fetch(//api); // this is called after the component is mounted and rendered
  }

  render() {
    return (
      <div className="about-us">
        <h1>About Us Class Component!</h1>
        <UserClass
          name={"Shubh Sharma (Class)"}
          location={"Bareilly"}
          contact={"@shubhstwt"}
          email={"mail.shubhsharma19@gmail.com"}
        />
      </div>
    );
  }
```

## Why we need componentDidMount()?

Used to make API calls to fetch data, because it is called after the component is mounted and rendered. This is why react always calls it after the component is rendered and if there are multiple childs being mounted then it is called after all the childs are mounted.

## What if there are multiple child components being present inside parent component?

In sequence:

1. parent `constructor`
2. parent `render`
3. child1 `constructor`
4. child1 `render`
5. child2 `constructor`
6. child2 `render`
7. child1 `componentDidMount()`
8. child2 `componentDidMount()`
9. parent `componentDidMount()`

## Phases of lifecycle of react components

React optimizes the rendering process by `batching` `multiple calls into a single update`. Meaning that react does not update the dom after every setState() call, but it batches multiple setState() calls into a single update.

This is because DOM manipulation is slow and long process and react does not want to do it multiple times.

![React lifecycle methods diagram](https://github.com/shubhxg/reaction/assets/69891912/6cd9fcaa-c81b-4641-affa-e5e084268fb8)

It has two phases:

1. Render phase
2. Commit phase

### Mounting Cycle

**Render phase**

- `constructor()`
- `render()`

**Commit phase**

- react updates the dom & refs in a single batch
- `componentDidMount()` - called once the component is mounted fully.

### Update Cycle

**Render phase**

- `render()`

**Commit phase**

- react updates the dom
- `componentDidUpdate()` - called after component is updated.

### Unmounting cycle

- `componentWillUnmount()` - called just before the component is unmounted. This is useful when you want to clean some data before the component is unmounted.

## Some more nitty gritty details

1. Do not compare `useEffect` to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. They are not similar.

2. `Mounting` and `Updating` both are different parts as Mounting is initially done and updating is done when DOM needs to be updated with new changed data.

3. React lifecycle methods are still used in modern React applications, although the introduction of hooks like useEffect has provided an different approach to managing component lifecycles.

4. `useEffect(callback, [])` with an empty dependency array is similar to componentDidMount. The callback function provided to useEffect will be executed after the initial render, mimicking the behavior of componentDidMount.

5. `useEffect(callback, [dep1, dep2])` with dependencies has similar but more simpler approach compared to `componentDidUpdate`. The callback function will be executed after the initial render and after every subsequent re-render if any of the dependencies change, similar to how `componentDidUpdate` is invoked when props or state change.

6. Modern react is very very clean and shorter approach compared to old class based component approach, and it is easier to manage and understand. It removes tha headache of unncecessary lifecycle methods and makes the code more simpler.

7. `return () => {}` returning a function inside useEffect for cleanup is similar to `componentWillUnmount`. The function returned from the callback function will be executed when the component is unmounted, similar to how `componentWillUnmount` is invoked when a component is unmounted.

```jsx
useEffect(() => {
  return () => {}; // unmounting cleaning
}, []);
```

```jsx
// This is an example using class based component to update when the state changes

componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count1) {
    // code
  }
  if (this.state.count2 !== prevState.count2) {
    // code
  }
  console.log("Component Did Update");
}

// same example using useEffect
useEffect(() => {
  // code
} [count1, count2])

```

## Custom Hooks

In React, a `custom hook` is a reusable function that allows you to `encapsulate and share stateful logic` across multiple components. `Custom hooks` are a way to extract component logic into reusable functions, making your code more modular, readable, and easier to maintain.

Custom hooks enable you to reuse stateful logic across multiple components, reducing code duplication and promoting DRY (Don't Repeat Yourself) principles. Instead of repeating the same logic in different components, you can extract it into a custom hook and share it wherever needed.

Custom hooks provide a way to manage and encapsulate state logic in a centralized location. This can help you manage state more effectively, especially in complex applications where `state management` can become complex. By using custom hooks, you can keep your state logic in one place, making it easier to debug and maintain.

## Optimization to build a large scale application

Bundlers create bundle of all the code into 1 file with all the dependencies and then it is sent to the browser. This is why it is important to optimize the code since the file will become bigger and bigger in size if all the code is in the 1 single file.

Instead we need smaller bundles of JS files.

This process is known as `Code Splitting` or `Chunking` or `Dynamic Bundling` or `Lazy Loading`.

This means that we can split our code into smaller chunks and then load them on demand, instead of loading everything at once. This can help us reduce the initial load time of our app, making it faster and more efficient.

This is a crucial part of building large scale applications and system design for Frontend.

There is one approach which is logical bundling.

## Lazy Loading / On Demand loading

`Lazy loading` is a technique that allows you to load code on demand, instead of loading everything at once. Loads code only when needed. This reduces the initial load time of app, making it faster and more efficient.

`Suspense` is a React component that lets you wait for some code to load and declaratively specify a loading state **(a fallback)** while we’re waiting for it to load. This is useful for lazy loading components, images, or any other kind of asynchronous code that you want to delay rendering until it’s ready.

If we dont use suspense, react throws an error when we use lazy loading. This is because react is trying to render the component before it is even loaded since that component is lazy loaded. So, we use suspense to handle that error.

```jsx
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("path"));

// In the routing in App.js, We change route using Suspense Component
```

## Higher Order Component (hoc)

A Component that takes another component as an argument and returns a new component. It acts like an ehnancer for the component.

Basically a function that takes a component as an argument and returns the same component with some enhanced feature on top of it. This way we dont have to repeat the same code for improved components.

A pure function is a function that always returns the same output for the same input. This is why we use pure functions in react.

```jsx
// creation of hoc

// hoc is a pure function 
export function withPromotedLabel(CardRestro) {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <CardRestro {...props} />
      </div>
    );
  };
}

// usage of hoc
const RestaurantCardPromoted = withPromotedLabel(CardRestro);
<RestaurantCardPromoted {...item?.info} />;
```
