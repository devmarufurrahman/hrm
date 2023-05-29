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
import Team from "../../pages/HrmMenu/Team";
import DesignationGroup from "../../pages/HrmMenu/DesignationGroup";
import Shift from "../../pages/HrmMenu/Shift";
import HolidayEntry from "../../pages/HrmMenu/HolidayEntry";
import HolidayReligionWise from "../../pages/HrmMenu/HolidayReligionWise";
import DesignationSpecification from "../../pages/HrmMenu/DesignationSpecification";

const Router = () => {
	return (
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
			<Route path="/team" element={<Team />} />
			<Route path="/designationGroup" element={<DesignationGroup />} />
			<Route path="/shift" element={<Shift />} />
			<Route path="/holidayEntry" element={<HolidayEntry />} />
			<Route path="/holidayReligionWise" element={<HolidayReligionWise />} />
			<Route
				path="/designationSpecification"
				element={<DesignationSpecification />}
			/>
		</Routes>
	);
};

export default Router;
