import { Space } from "antd";
import UnitDepartmentSummary from "./UnitDepartmentSummary";
import DesignationDetails from "./DesignationDetails";
import DesignationSummary from "./DesignationSummary";

const Designation = () => {
	return (
		<>
			<div style={{ width: 1200 }} className="sectionParent p-10 bg-gray-100 ">
				<Space direction="vertical" size={90}>
					<DesignationDetails />
					<DesignationSummary />
					<UnitDepartmentSummary />
				</Space>
			</div>
		</>
	);
};

export default Designation;
