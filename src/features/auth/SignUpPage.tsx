import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Card, CardBody } from "../../components/card/Card";
import { GoogleLogo } from "../../components/googlelogo/GoogleLogo";

export const SignUpPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				<Card>
					<CardBody className="space-y-6">
						<div className="text-center">
							<h1 className="text-2xl font-bold text-gray-900 mb-2">
								Create Account
							</h1>
							<p className="text-gray-600">
								Join us to save and organize your resources
							</p>
						</div>

						<form onSubmit={handleSubmit} className="space-y-4">
							<Input
								label="Email"
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								className="w-full"
								required
								autoComplete="off"
							/>

							<Input
								label="Password"
								type="password"
								placeholder="Create a password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								className="w-full"
								required
								autoComplete="off"
							/>

							<Input
								label="Confirm Password"
								type="password"
								placeholder="Confirm your password"
								value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)}
								className="w-full"
								required
								autoComplete="off"
							/>

							<Button type="submit" className="w-full">
								Create Account
							</Button>
						</form>

						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-200" />
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-white text-gray-500">
									Or sign up with
								</span>
							</div>
						</div>

						<Button variant="outline" className="w-full">
							<GoogleLogo />
							Continue with Google
						</Button>

						<p className="text-center text-gray-600 text-sm">
							Already have an account?
							<Link
								to="/signin"
								className="text-blue-600 hover:text-blue-700 font-medium"
							>
								Sign in
							</Link>
						</p>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
