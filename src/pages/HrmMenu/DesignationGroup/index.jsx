import { Space } from "antd";
import DesignationDetails from "./Details";
import DesignationSummary from "./Summary";

const DesignationGroup = () => {
	return (
		<>
			<div className="designationGroup p-10 bg-gray-100 flex justify-center items-center">
				<Space direction="vertical" size={70}>
					<DesignationDetails />
					<DesignationSummary />
				</Space>
			</div>
		</>
	);
};

export default DesignationGroup;
