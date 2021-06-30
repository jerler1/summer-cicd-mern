import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewRestaurantForm from "./NewRestaurantForm";
import { expect } from "chai";

afterEach(cleanup);

describe("NewRestaurant", () => {
  it("updates the input value on change", () => {
    const { getByTestId } = render(<NewRestaurantForm />);
    const nameInput = getByTestId("restaurant-name");
    fireEvent.change(nameInput, { target: { value: "Waffle House" } });
    expect(nameInput.value).toBe("Waffle House");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<NewRestaurantForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
