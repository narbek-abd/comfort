import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { store } from "../store";
import { Provider } from "react-redux";

let history;

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  history = createMemoryHistory();

  return (
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        {children}
      </Router>
    </Provider>
  );
};

const appRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { appRender as render };

export { history };
export { store };
