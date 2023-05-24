import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/DashboardMenu";
import Settings from "../../pages/SettingsMenu";
import ModeSetup from "../../pages/HrmMenu/HomeModeSetup/HomeModeSetup";
import Company from "../../pages/HrmMenu/Company/Company";
import Unit from "../../pages/HrmMenu/Unit/Unit";
import Department from "../../pages/HrmMenu/Department";
import Designation from "../../pages/HrmMenu/Designation";
import Section from "../../pages/HrmMenu/Section";
import Wing from "../../pages/HrmMenu/Wing";

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/modeSetup" element={<ModeSetup />} />
				<Route path="/company" element={<Company />} />
				<Route path="/unit" element={<Unit />} />
				<Route path="/department" element={<Department />} />
				<Route path="/section" element={<Section />} />
				<Route path="/designation" element={<Designation />} />
				<Route path="/wing" element={<Wing />} />
			</Routes>
		</div>
	);
};

export default Router;
