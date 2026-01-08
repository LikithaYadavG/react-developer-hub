import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";
import { NavigationBar } from "./NavigationBar";

type View = "home" | "favorites";

interface RenderOptions {
	currentView?: View;
	onNavigate?: (view: View) => void;
}

const defaultProps: Required<RenderOptions> = {
	currentView: "home",
	onNavigate: vi.fn(),
};

const renderNavigationBar = (props?: RenderOptions) => {
	const mergedProps = { ...defaultProps, ...props };

	return render(
		<NavigationBar
			currentView={mergedProps.currentView}
			onNavigate={mergedProps.onNavigate}
		/>,
	);
};

describe("NavigationBar", () => {
	it("should render navigation landmark", () => {
		renderNavigationBar();

		const navigation = screen.getByRole("navigation");

		expect(navigation).toBeInTheDocument();
	});

	it("should render navigation buttons", () => {
		renderNavigationBar();

		const buttons = screen.getAllByRole("button");

		expect(buttons.length).toBeGreaterThan(0);
	});

	it("should mark current view as active using aria-current", () => {
		renderNavigationBar({ currentView: "home" });

		const activeButton = screen.getByRole("button", {
			current: "page",
		});

		expect(activeButton).toBeInTheDocument();
	});

	it("should call onNavigate with favorites when favorites button is clicked", async () => {
		const user = userEvent.setup();
		const onNavigate = vi.fn();

		renderNavigationBar({ onNavigate });

		const buttons = screen.getAllByRole("button");

		await user.click(buttons[1]);

		expect(onNavigate).toHaveBeenCalledWith("favorites");
	});

	it("should call onNavigate with home when home button is clicked", async () => {
		const user = userEvent.setup();
		const onNavigate = vi.fn();

		renderNavigationBar({
			currentView: "favorites",
			onNavigate,
		});

		const buttons = screen.getAllByRole("button");

		await user.click(buttons[0]);

		expect(onNavigate).toHaveBeenCalledWith("home");
	});
});
