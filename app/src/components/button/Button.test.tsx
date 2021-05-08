import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });
  test("render", () => {
    const { asFragment } = render(<Button buttonType="like" isEmpty={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("click:count", () => {
    render(<Button buttonType="like" isEmpty={false} />);
    // const button = screen.getByText("Increment");
    // fireEvent.click(button);
    // fireEvent.click(button);
    // screen.getByText("Count: 2");
  });
});
