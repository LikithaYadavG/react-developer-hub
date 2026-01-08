import { Footer } from "../../components/footer/Footer";
import { Logo } from "../../components/logo/Logo";
import { NavigationBar } from "../../components/navigation-bar/NavigationBar";

interface LayoutProps {
	children: React.ReactNode;
	currentView: "home" | "favorites";
	onNavigate: (view: "home" | "favorites") => void;
}

export const Layout = ({ children, currentView, onNavigate }: LayoutProps) => {
	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white border-b border-gray-200 sticky top-0 z-10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<Logo />
						<NavigationBar currentView={currentView} onNavigate={onNavigate} />
					</div>
				</div>
			</header>
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{children}
			</main>
			<Footer />
		</div>
	);
};
