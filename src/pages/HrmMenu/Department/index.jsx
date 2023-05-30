import { Space } from "antd";
import UnitDetailsForm from "./UnitDetailsForm";
import DepartmentSummary from "./DepartmentSummary";
import DepartmentUnit from "./DepartmentUnit";

const Department = () => {
	return (
		<>
			<div style={{ width: 1200 }} className="modeParent p-10 bg-gray-100 ">
				<Space size={90} direction="vertical">
					<UnitDetailsForm />

					<DepartmentUnit />

					<DepartmentSummary />
				</Space>
			</div>
		</>
	);
};

export default Department;
