import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Spinner, type SpinnerProps } from "./Spinner";

type RenderOptions = {
	additionalProps?: Partial<SpinnerProps>;
};

const defaultProps: SpinnerProps = {
	size: "md",
	className: "",
};

const renderSpinner = ({ additionalProps }: RenderOptions = {}) => {
	const user = userEvent.setup();

	render(<Spinner {...defaultProps} {...additionalProps} />);

	return {
		user,
		spinner: screen.getByRole("status", { name: /loading/i }),
	};
};

describe("Spinner", () => {
	it("should render a loading indicator with accessible role", () => {
		const { spinner } = renderSpinner();

		expect(spinner).toBeInTheDocument();
	});

	it("should render medium size spinner by default", () => {
		const { spinner } = renderSpinner();

		expect(spinner).toHaveClass("w-8 h-8");
	});

	it("should render small size spinner when size is sm", () => {
		const { spinner } = renderSpinner({
			additionalProps: { size: "sm" },
		});

		expect(spinner).toHaveClass("w-4 h-4");
	});

	it("should render large size spinner when size is lg", () => {
		const { spinner } = renderSpinner({
			additionalProps: { size: "lg" },
		});

		expect(spinner).toHaveClass("w-12 h-12");
	});

	it("should apply custom className when provided", () => {
		const { spinner } = renderSpinner({
			additionalProps: { className: "text-red-500" },
		});

		expect(spinner).toHaveClass("text-red-500");
	});
});
