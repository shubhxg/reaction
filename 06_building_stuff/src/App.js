import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Error from "./components/Error";
import MenuPage from "./components/MenuPage";
import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
        path: "/grocery",
        element: <Grocery />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/res/:resId",
        element: <MenuPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);
