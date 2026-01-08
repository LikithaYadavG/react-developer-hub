import { useState } from "react";
import { Layout } from "./app/layout/Layout";

const App = () => {
	const [currentView, setCurrentView] = useState<"home" | "favorites">("home");

	return (
		<Layout currentView={currentView} onNavigate={setCurrentView}>
			{null}
		</Layout>
	);
};

export default App;
