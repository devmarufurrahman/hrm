import { Space } from "antd";
import DesignationDetails from "./Details";
import DesignationSummary from "./Summary";

const DesignationGroup = () => {
	return (
		<>
			<div style={{ width: 1200 }} className="sectionParent p-10 bg-gray-100 ">
				<Space direction="vertical" size={70}>
					<DesignationDetails />
					<DesignationSummary />
				</Space>
			</div>
		</>
	);
};

export default DesignationGroup;
