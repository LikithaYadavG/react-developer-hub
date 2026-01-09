import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { Footer } from "./Footer";

const renderFooter = () => {
	return render(<Footer />);
};

describe("Footer", () => {
	it("should render footer landmark", () => {
		renderFooter();

		const footer = screen.getByRole("contentinfo");

		expect(footer).toBeInTheDocument();
	});

	it("should contain visible text content", () => {
		renderFooter();

		const footer = screen.getByRole("contentinfo");

		expect(footer.textContent?.trim().length).toBeGreaterThan(0);
	});
});
