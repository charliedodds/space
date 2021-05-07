import React from "react";
import { render } from "@testing-library/react";
import PlanetsTable from "./PlanetsTable";

describe("PlanetsTable tests", () => {
  it("should render", () => {
    expect(render(<PlanetsTable />)).toBeTruthy();
  });
});
