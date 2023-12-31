import React from "react";
import Login from "./login_page/Login";
import Browse from "./browse_page/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./signup_page/SignUp";

import MovieInfo from "./browse_page/info_div/MovieInfo";
import { useSelector } from "react-redux";

import GPTSearch from "./gpt_search/GPTSearch";

const Body = () => {
  const showInfoDiv = useSelector(
    (state) => state.currentInfoMovie.showInfoDiv
  );

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
      element: <GPTSearch />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
      {showInfoDiv && <MovieInfo />}
    </div>
  );
};

export default Body;
