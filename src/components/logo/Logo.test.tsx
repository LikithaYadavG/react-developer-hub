import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Logo } from "./Logo";

const renderLogo = () => {
	return render(<Logo />);
};

describe("Logo", () => {
	it("should render a heading for the logo", () => {
		renderLogo();

		const heading = screen.getByRole("heading");

		expect(heading).toBeInTheDocument();
	});

	it("should have visible heading content", () => {
		renderLogo();

		const heading = screen.getByRole("heading");

		expect(heading.textContent?.trim().length).toBeGreaterThan(0);
	});
});
