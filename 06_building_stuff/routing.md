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

## Handling errors

Created a new component for the error page.

```jsx
import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  return (
    <div>
    <h1>Error Occurred</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>{err?.status} {err?.statusText}</p>
    </div>
  );
}

// App.js

{ path: "/", element: <AppLayout />, errorElement: <Error /> },

```

`useRouteError` is a hook used to get the error object from the current route.

## Children Routes

In many applications, you often have a common layout or component that should be rendered for multiple routes. For example, you might have a `Sidebar` and a `Header` component that should be visible across multiple pages.

By using the Outlet, you can render these shared components as part of the parent route, while the content specific to each child route is rendered inside the `Outlet`

<Outlet /> serves as a placeholder for rendering the child route components within the parent component's UI.

```jsx
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

Explanation: `<Outlet />` component is a placeholder where the child route components will be rendered.

When the user navigates to the root path `/`, the `Main` component will be rendered inside the `Outlet` of AppLayout.

When the user navigates to `/contactus`, the `ContactUs` component will be rendered inside the `Outlet` of AppLayout.

When the user navigates to `/about`, the About component will be rendered inside the `Outlet` of AppLayout.
