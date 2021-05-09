import React from "react";
import { cleanup, render } from "@testing-library/react";

import ButtonGroup from "../../../src/components/button-group/ButtonGroup";
import { BUTTON_TYPE_OPTIONS } from "../../../src/constants/BUTTON";

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
    expect(isEmptyButtonGroup.container.firstChild.childNodes.length).toBe(
      BUTTON_TYPE_OPTIONS.length
    );
    expect(isNotEmptyButtonGroup.container.firstChild.childNodes.length).toBe(
      BUTTON_TYPE_OPTIONS.length
    );
  });
  test("contains children.IN Addition, children's length changes depending on 'BUTTON_TYPE_OPTIONS'.", () => {
    // TODO: レンダリングされるボタンの数がBUTTON_TYPE_OPTIONSの数によって変化するかを確認したい。
    // 難点としては、BUTTON_TYPE_OPTIONSの数を変更するのが難しい。fsなど使って無理やり書き換えるか、そもそもの実装を変える?
  });
});
