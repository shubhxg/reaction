## Table of Contents

1. [Introduction to Routing in React](#routing-in-react)
2. [Installing React Router](#installing)
3. [Configuration](#configuration)
4. [Explanation of Configuration Code](#explanation-of-above-code)
5. [Recommended Router](#which-router-should-we-use)
6. [Handling Errors](#handling-errors)
7. [Children Routes](#children-routes)
8. [Types of Routing](#types-of-routing)
   - [Server Side](#1-server-side)
   - [Client Side / SPA](#2-client-side--spa)
9. [Dynamic Routing](#dynamic-routing)
10. [Using useParams](#useparams)


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

## Types of Routing

### 1. Server Side:

- In server-side routing, the server handles the routing logic.

- When a user requests a specific URL, the server receives the request, processes it, and returns the HTML, CSS, and JavaScript files specific for that route.

- The server is responsible for rendering the entire page and sending the fully rendered HTML to the client's browser.

- This approach is commonly used in traditional server-rendered applications, such as those built with `PHP, Ruby on Rails, or server-side frameworks like Express.js (Node.js)`.

- Good for `SEO`.

- Slower page loading due to the need to fetch the entire HTML from the server.

### 2. Client Side / SPA:

- In this approach, The routing logic is handled by the client-side JavaScript code running in the browser.

- When the application is initially loaded, the server sends a single HTML file along with the JavaScript bundle containing the entire application.

- After the initial load, the JavaScript manages the routing and rendering components.

- When the user navigates to a different URL, the JavaScript code updates the browser's URL and re-renders the appropriate components without full page refresh from the server.

- Client-side routing is commonly used in modern Single Page Applications (SPAs) built with frameworks like `React, Angular, Vue.js, or client-side libraries like React Router or Vue Router`.

- Better for `UX`, Bad for `SEO`.

## Dynamic Routing

```jsx
{ path: "/res/:resId", element: <MenuPage />, }
```
## useParams

`useParams` is a hook that allows you to access the dynamic parameters from the current route. It returns an object with the parameter names as keys and their values as values.

