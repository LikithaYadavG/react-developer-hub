import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";
import { Layout } from "./Layout";

type View = "home" | "favorites";

interface RenderOptions {
	currentView?: View;
	onNavigate?: (view: View) => void;
	children?: React.ReactNode;
}

const defaultProps: Required<RenderOptions> = {
	currentView: "home",
	onNavigate: vi.fn(),
	children: <div>Page Content</div>,
};

const renderLayout = (props?: RenderOptions) => {
	const mergedProps = { ...defaultProps, ...props };

	return render(
		<Layout
			currentView={mergedProps.currentView}
			onNavigate={mergedProps.onNavigate}
		>
			{mergedProps.children}
		</Layout>,
	);
};

describe("Layout", () => {
	const user = userEvent.setup();

	it("should render the logo", () => {
		renderLayout();

		const logo = screen.getByRole("heading", {
			name: /react resource hub/i,
		});

		expect(logo).toBeInTheDocument();
	});

	it("should render navigation bar", () => {
		renderLayout();

		const navigation = screen.getByRole("navigation");

		expect(navigation).toBeInTheDocument();
	});

	it("should render children inside main content", () => {
		renderLayout();

		const content = screen.getByText("Page Content");

		expect(content).toBeInTheDocument();
	});

	it("should call onNavigate when navigation item is clicked", async () => {
		const onNavigate = vi.fn();

		renderLayout({ onNavigate });

		const favoritesLink = screen.getByRole("button", {
			name: /favorites/i,
		});

		await user.click(favoritesLink);

		expect(onNavigate).toHaveBeenCalled();
	});

	it("should render footer", () => {
		renderLayout();

		const footer = screen.getByRole("contentinfo");

		expect(footer).toBeInTheDocument();
	});
});
