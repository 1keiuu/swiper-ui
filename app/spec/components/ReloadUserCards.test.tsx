import React from "react";
import { cleanup, render } from "@testing-library/react";
import ReloadUserCards from "../../src/components/reload-user-cards/ReloadUserCards";

describe("ReloadUserCards", () => {
  test("render as before.", () => {
    const { asFragment } = render(<ReloadUserCards />);
    expect(asFragment()).toMatchSnapshot();
  });
});
