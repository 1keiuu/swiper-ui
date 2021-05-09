import React from "react";
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
  // HACK: ここモックデータにすべきか、constantからimportした物にすべきか
  const BUTTON_TYPE_OPTIONS: ButtonTypeOption[] = ["nope", "profile", "like"];
  afterEach(() => {
    cleanup();
  });
  test("render as before.", () => {
    const { asFragment } = render(<ButtonGroup isEmpty={false}></ButtonGroup>);
    expect(asFragment()).toMatchSnapshot();
  });
  test("contains children regardless of isEmpty state.", () => {
    const isEmptyButtonGroup = render(
      <ButtonGroup isEmpty={true}></ButtonGroup>
    );
    const isNotEmptyButtonGroup = render(
      <ButtonGroup isEmpty={false}></ButtonGroup>
    );
    // HACK: 孫Nodeを取得する際はこのやり方で問題ない？
    // firstChildの型がChildNodeなのでchildrenがpropertyにない為HTMLElementへ変換している
    expect(
      (isEmptyButtonGroup.container.firstChild as HTMLElement).children.length
    ).toBe(BUTTON_TYPE_OPTIONS.length);
    expect(
      (isNotEmptyButtonGroup.container.firstChild as HTMLElement).children
        .length
    ).toBe(BUTTON_TYPE_OPTIONS.length);
  });
});
