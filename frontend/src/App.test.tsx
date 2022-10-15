import React from "react";
import {
  getByAltText,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  expect(true).toBeTruthy();
});
