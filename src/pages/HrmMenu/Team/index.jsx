import { Space } from "antd";
import TeamSummary from "./TeamSummary";
import TeamDetails from "./TeamDetails";
import UnitDepartmentSectionWingSummary from "./UnitDepartmentWingSummary";

const Team = () => {
	return (
		<>
			<div style={{ width: 1200 }} className="sectionParent p-10 bg-gray-100 ">
				<Space direction="vertical" size={70}>
					<TeamDetails />
					<TeamSummary />
					<UnitDepartmentSectionWingSummary />
				</Space>
			</div>
		</>
	);
};

export default Team;
