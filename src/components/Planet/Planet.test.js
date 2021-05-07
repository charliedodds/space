import React from "react";
import { render } from "@testing-library/react";
import Planet from "./Planet";

describe("Planet tests", () => {
  it("should render", () => {
    expect(render(<Planet />)).toBeTruthy();
  });
});
