import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";
import { SearchBar } from "./SearchBar";

interface RenderOptions {
	value?: string;
	placeholder?: string;
	label?: string;
	showClearButton?: boolean;
	onChange?: (value: string) => void;
}

const defaultProps: Required<Omit<RenderOptions, "value">> = {
	placeholder: "Search by title, description, or tags...",
	label: "Search",
	showClearButton: true,
	onChange: vi.fn(),
};

const renderSearchBar = (additionalProps?: RenderOptions) => {
	const props = { ...defaultProps, ...additionalProps };

	return render(
		<SearchBar
			value={props.value}
			placeholder={props.placeholder}
			label={props.label}
			showClearButton={props.showClearButton}
			onChange={props.onChange}
		/>,
	);
};

describe("SearchBar", () => {
	const user = userEvent.setup();

	it("should render a search textbox", () => {
		renderSearchBar();

		const input = screen.getByRole("textbox");

		expect(input).toBeInTheDocument();
	});

	it("should update value when user types in uncontrolled mode", async () => {
		renderSearchBar();

		const input = screen.getByRole("textbox");
		await user.type(input, "a");

		expect(defaultProps.onChange).toHaveBeenCalled();
	});

	it("should render clear button when value is present", () => {
		renderSearchBar({ value: "test" });

		const clearButton = screen.getByRole("button", { name: /clear/i });

		expect(clearButton).toBeInTheDocument();
	});

	it("should clear value when clear button is clicked", async () => {
		const onChange = vi.fn();

		renderSearchBar({ value: "test", onChange });

		const clearButton = screen.getByRole("button", { name: /clear/i });
		await user.click(clearButton);

		expect(onChange).toHaveBeenCalledWith("");
	});

	it("should not render clear button when showClearButton is false", () => {
		renderSearchBar({ value: "test", showClearButton: false });

		const clearButton = screen.queryByRole("button", { name: /clear/i });

		expect(clearButton).not.toBeInTheDocument();
	});

	it("should respect controlled value prop", () => {
		renderSearchBar({ value: "controlled value" });

		const input = screen.getByRole("textbox");

		expect(input).toHaveValue("controlled value");
	});
});
