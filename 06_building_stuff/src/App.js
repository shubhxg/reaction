import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/contactus", element: <ContactUs /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
