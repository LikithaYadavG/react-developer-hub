import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { SignUpPage } from "./SignUpPage";

const renderSignUpPage = () => {
	return render(
		<BrowserRouter>
			<SignUpPage />
		</BrowserRouter>,
	);
};

describe("SignUpPage", () => {
	it("should render the email input field", () => {
		renderSignUpPage();

		expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
	});

	it("should render the password input field", () => {
		renderSignUpPage();

		expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
	});

	it("should render the confirm password input field", () => {
		renderSignUpPage();

		expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
	});

	it("should allow typing in the email input", async () => {
		renderSignUpPage();
		const user = userEvent.setup();

		const emailInput = screen.getByLabelText(/email/i);
		await user.type(emailInput, "test@example.com");

		expect(emailInput).toHaveValue("test@example.com");
	});

	it("should allow typing in the password input", async () => {
		renderSignUpPage();
		const user = userEvent.setup();

		const passwordInput = screen.getByLabelText(/^password$/i);
		await user.type(passwordInput, "password123");

		expect(passwordInput).toHaveValue("password123");
	});

	it("should allow typing in the confirm password input", async () => {
		renderSignUpPage();
		const user = userEvent.setup();

		const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
		await user.type(confirmPasswordInput, "password123");

		expect(confirmPasswordInput).toHaveValue("password123");
	});

	it("should render the create account button", () => {
		renderSignUpPage();

		expect(
			screen.getByRole("button", { name: /create account/i }),
		).toBeInTheDocument();
	});

	it("should render the continue with google button", () => {
		renderSignUpPage();

		expect(
			screen.getByRole("button", { name: /continue with google/i }),
		).toBeInTheDocument();
	});

	it("should render the sign in link", () => {
		renderSignUpPage();

		expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
	});
});
