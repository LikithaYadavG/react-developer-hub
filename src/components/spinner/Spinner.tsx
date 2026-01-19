export interface SpinnerProps {
	size?: "sm" | "md" | "lg";
	className?: string;
}

export const Spinner = ({ size = "md", className = "" }: SpinnerProps) => {
	const sizeStyles = {
		sm: "w-4 h-4 border-2",
		md: "w-8 h-8 border-3",
		lg: "w-12 h-12 border-4",
	} as const;

	return (
		<output
			className={`inline-block ${sizeStyles[size]} border-gray-200 border-t-blue-600 rounded-full animate-spin ${className}`}
			aria-label="Loading"
		/>
	);
};
