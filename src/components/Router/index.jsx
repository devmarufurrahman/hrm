import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/DashboardMenu";
import Settings from "../../pages/SettingsMenu";

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</div>
	);
};

export default Router;
