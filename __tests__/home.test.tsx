import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("Should have login href", () => {
    render(<Home />);
    const loginLink = screen.getByTestId("login-link");
    expect(loginLink).toHaveAttribute("href", "/login");
  });
});
