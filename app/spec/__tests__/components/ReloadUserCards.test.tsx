import React from "react";
import { cleanup, render } from "@testing-library/react";
// FIXME: axiosがjest上で使えないので仮のコンポーネントを使ってテストしている
import ReloadUserCards from "../ignore/ReloadUserCards";

import * as UserCardsContext from "../../../src/context/UserCardsContext";

describe("ReloadUserCards Component", () => {
  // NOTE: Contextをスパイ化
  let userCardsStateSpy: jest.SpyInstance<unknown>;
  beforeEach(() => {
    userCardsStateSpy = jest.spyOn(UserCardsContext, "useUserCardsState");
    const initialState: UserCardsState = {
      userCards: [],
      paginationIndex: 0,
      pageStatus: "reloading",
    };
    userCardsStateSpy.mockImplementation(() => initialState);
  });
  afterEach(() => {
    userCardsStateSpy.mockClear();
    cleanup();
  });

  test("render reloading message when pageStatus is initial state.", () => {
    const { asFragment } = render(<ReloadUserCards />);
    expect(asFragment().firstChild.childNodes.length).toBe(1);
    expect(asFragment().firstChild.firstChild.textContent).toBe("取得中...");
    expect(asFragment()).toMatchSnapshot();
  });
  test("render empty message when pageStatus is 'empty'.", () => {
    const { asFragment, rerender } = render(<ReloadUserCards />);
    userCardsStateSpy.mockImplementation(() => ({
      userCards: [],
      paginationIndex: 0,
      pageStatus: "empty",
    }));
    // NOTE: userCardsStateSpyを使い、contextの値を変えて再描画
    rerender(<ReloadUserCards />);
    expect(asFragment().firstChild.childNodes.length).toBe(3);
    expect(asFragment()).toMatchSnapshot();
  });
});
