import React from "react";
import Login from "./login_page/Login";
import Browse from "./browse_page/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./signup_page/SignUp";

import MovieInfo from "./browse_page/info_div/MovieInfo";
import { useSelector } from "react-redux";
import MovieSearch from "./gpt_search/MovieSearch";

const Body = () => {
  const reduxState = useSelector((state) => state);

  const showInfoDiv = reduxState.currentInfoMovie.showInfoDiv;

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
    {
      path: "/gpt-search",
      element: <MovieSearch />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      {showInfoDiv && <MovieInfo />}
    </div>
  );
};

export default Body;
