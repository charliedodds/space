import React from "react";
import { render } from "@testing-library/react";
import NewPlanetForm from "./NewPlanetForm";

describe("NewPlanetForm tests", () => {
  it("should render", () => {
    expect(render(<NewPlanetForm />)).toBeTruthy();
  });
});
