import React from "react";
import { cleanup, render } from "@testing-library/react";

import UserCard from "../../../src/components/user-card/UserCard";

describe("UserCard Component", () => {
  beforeEach(() => {
    cleanup();
  });
  test("render as before.", () => {
    const { asFragment } = render(<UserCard></UserCard>);
    expect(asFragment()).toMatchSnapshot();
  });
});
