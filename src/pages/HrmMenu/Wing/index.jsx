import { Space } from "antd";
import WingDetails from "./WingDetails";
import WingSummary from "./WingSummary";
import UnitDepartmentSectionSummary from "./UnitDepartmentSummary";

const Wing = () => {
	return (
		<>
			<div style={{ width: 1200 }} className="sectionParent p-10 bg-gray-100 ">
				<Space direction="vertical" size={70}>
					<WingDetails />
					<WingSummary />
					<UnitDepartmentSectionSummary />
				</Space>
			</div>
		</>
	);
};

export default Wing;
