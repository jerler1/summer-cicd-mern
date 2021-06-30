import React from "react";
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import Restaurant from "./Restaurant";

afterEach(cleanup);

const props = {
    name: "Olive Garden",
    address: "1313 Tea Lane",
    phone: "888-111-1111",
    cuisine: "Italian",
}

describe("Restaurant", () => {
    it("renders correctly", () => {
        const { getByText} = render(<Restaurant {...props} />);
        expect(getByText("Olive Garden")).toBeTruthy();
    })
})