import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Button from "../../../src/components/button/Button";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });
  test("render as before.", () => {
    const { asFragment } = render(<Button buttonType="like" isEmpty={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("is active when isEmpty is false.", () => {
    const rendered = render(<Button buttonType="like" isEmpty={false} />);
    expect(rendered.container.children.length).toBe(1);
    expect(rendered.container.firstChild).toBeEnabled;
  });
  test("is disabled when isEmpty is true.", () => {
    const rendered = render(<Button buttonType="like" isEmpty={true} />);
    expect(rendered.container.children.length).toBe(1);
    expect(rendered.container.firstChild).toBeDisabled;
  });
});
