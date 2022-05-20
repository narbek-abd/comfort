import React from "react";
import "./test/mock.ts";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/comfortl@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
});
