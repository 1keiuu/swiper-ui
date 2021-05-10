import React from "react";
import { cleanup, render, fireEvent, waitFor } from "@testing-library/react";

import UserCard from "../../../src/components/user-card/UserCard";
import * as CurrentUserCardContext from "../../../src/context/CurrentUserCardContext";

describe("UserCard Component(UI)", () => {
  const valideUser = {
    id: 1,
    name: "test1",
    imgURL: "http://localhost/image",
    age: 21,
    profile: "test1's profile",
  };
  beforeEach(() => {
    cleanup();
  });
  test("is rendered as before.", () => {
    const { asFragment } = render(
      <UserCard user={valideUser} index={1} currentCardIndex={1}></UserCard>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("render card's front correctly.", () => {
    const { asFragment } = render(
      <UserCard user={valideUser} index={1} currentCardIndex={1}></UserCard>
    );
    // HACK: 壊れやすそうなのでいい方法考える
    const node = asFragment();
    const inner = node.firstChild.childNodes[0];
    const userCardItemFront = inner.childNodes[0];
    const userCardStatusBudgeLike = userCardItemFront.childNodes[0];
    const userCardStatusBudgeNope = userCardItemFront.childNodes[1];
    expect(userCardStatusBudgeLike.firstChild.textContent).toBe("LIKE");
    expect(userCardStatusBudgeNope.firstChild.textContent).toBe("NOPE");
    const userCardImage = userCardItemFront.childNodes[2];
    const userCardInfo = userCardItemFront.childNodes[3];
    const userCardName = userCardInfo.childNodes[0];
    const userCarAge = userCardInfo.childNodes[1];
    expect((userCardImage as HTMLImageElement).src).toBe(valideUser.imgURL);
    expect(userCardName.textContent).toBe(`${valideUser.name},`);
    expect(userCarAge.textContent).toBe(String(valideUser.age));
  });
  test("render card's back correctly.", () => {
    const { asFragment } = render(
      <UserCard user={valideUser} index={1} currentCardIndex={1}></UserCard>
    );
    const node = asFragment();
    const inner = node.firstChild.childNodes[0];
    const userCardItemBack = inner.childNodes[1];
    expect(userCardItemBack.firstChild.textContent).toBe(valideUser.profile);
  });
  test("is rendered and has '--prev' class.", () => {
    const prev = render(
      <UserCard user={valideUser} index={1} currentCardIndex={2}></UserCard>
    );
    expect(
      (prev.container.firstChild as HTMLDivElement).classList.contains("--prev")
    );
  });
  test("is rendered and has '--next' class.", () => {
    const prev = render(
      <UserCard user={valideUser} index={1} currentCardIndex={0}></UserCard>
    );
    expect(
      (prev.container.firstChild as HTMLDivElement).classList.contains("--next")
    );
  });
});

describe("UserCard Component(event/context)", () => {
  // カードクリック時,スワイプ時にcontext(dispatch)が正常に呼び出されているかのテスト
  let useCurrentUserCardDispatchSpy = jest.spyOn(
    CurrentUserCardContext,
    "useCurrentUserCardDispatch"
  );
  const toggleIsFlippedDispatchSpy = jest.fn();
  const setIsFlippedDispatchSpy = jest.fn();
  const incrementIndexDispatchSpy = jest.fn();
  const decrementIndexDispatchSpy = jest.fn();
  const changeStatusDispatchSpy = jest.fn();

  useCurrentUserCardDispatchSpy.mockImplementation(() => ({
    toggleIsFlipped: toggleIsFlippedDispatchSpy,
    setIsFlipped: setIsFlippedDispatchSpy,
    incrementIndex: incrementIndexDispatchSpy,
    decrementIndex: decrementIndexDispatchSpy,
    changeStatus: changeStatusDispatchSpy,
  }));
  const valideUser = {
    id: 1,
    name: "test1",
    imgURL: "http://localhost/image",
    age: 21,
    profile: "test1's profile",
  };
  test("dispatch 'toggleIsFlipped' when it's clicked", async () => {
    const card = render(
      <UserCard user={valideUser} index={1} currentCardIndex={0}></UserCard>
    ).container.firstChild;
    const inner = card.firstChild;
    expect((inner as HTMLDivElement).classList.contains("--flipped")).toBe(
      false
    );
    fireEvent.click(card);
    expect(toggleIsFlippedDispatchSpy).toBeCalled();
  });
  test("fire correct events when it's swiped", () => {
    // NOTE: swipe eventのテストの追加
    // スワイプ量の取得の必要があるので、Enzymeとか使う必要がありそう？
  });
});
