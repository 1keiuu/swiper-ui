import { cleanup, render } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";
import { BUTTON_TYPE_OPTIONS } from "../../constants/button";

// HACK: constantのテストをここに書くべきか。個別で作るか。
describe("constant", () => {
  test("'BUTTON_TYPE_OPTIONS' exists", () => {
    expect(BUTTON_TYPE_OPTIONS.length).toBeGreaterThan(1);
  });
});

describe("ButtonGroup", () => {
  afterEach(() => {
    cleanup();
  });
  test("render as before.", () => {
    const { asFragment } = render(<ButtonGroup></ButtonGroup>);
  });
});
