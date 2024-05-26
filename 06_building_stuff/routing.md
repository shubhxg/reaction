## Routing in React

Introducing `client-side routing` in React application, allowing users to navigate between different components (pages) based on the URL, without causing a full page refresh.

Using `React Router` library for routing.

**Read docs here:** https://reactrouter.com/en/main

### Installing

`npm install react-router-dom`

### Configuration

We need to do config for routing. We will do this in the App.js file.

```jsx
// App.js

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/route1",
    element: <Component1 />, // Component that you want to render on that route.
  },
  {
    path: "/route2",
    element: <Component2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root"))
.render(<RouterProvider router = {appRouter}>);
```

### Explanation of above code

- `createBrowserRouter` function is used to create a new instance of the `BrowserRouter` component, which is responsible for managing the routing in your React application.

- The `createBrowserRouter` function takes an array of route objects as its argument. Each route object defines a path and the component that should be rendered when the URL matches that path.

- `{ path: "/route1", element: <Component1 /> } ` is route object that with path `/route1`.
When the URL matches `/route1`, the <Component1 /> component will be rendered.

- The `<RouterProvider />` is a component associates the router instance (appRouter created with createBrowserRouter) with your React component tree.

- `render(
  <RouterProvider router={appRouter} />
);` line renders a component `RouterProvider` that takes a prop `router` sending the instance created with `BrowserRouter`

## Which router should we use?

`createBrowserRouter` is the recommended one by React Router for basic default routing.