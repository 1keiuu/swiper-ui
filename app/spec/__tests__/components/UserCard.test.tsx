import React from "react";
import { cleanup, render } from "@testing-library/react";

import UserCard from "../../../src/components/user-card/UserCard";

describe("UserCard Component", () => {
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
  test("render front UI correctly.", () => {
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
  test("render back UI correctly.", () => {
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
