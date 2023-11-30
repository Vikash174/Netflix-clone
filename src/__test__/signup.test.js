import { render, screen } from "@testing-library/react";
import SignUp from "../components/signup_page/SignUp";
import "@testing-library/jest-dom";
import { TextEncoder } from "util";

global.TextEncoder = TextEncoder;

test("should load sign up page", () => {
  render(<SignUp />);

  const heading = screen.getByAltText("logo");

  expect(heading).toBeInTheDocument();
});
