import React from "react";
import Login from "./login_page/Login";
import Browse from "./browse_page/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./signup_page/SignUp";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
