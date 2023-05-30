import { Space } from "antd";
import SectionFrom from "./SectionFrom";
import SectionSummary from "./SectionSummary";
import UnitDepartmentSummary from "./UnitDepartmentSummary";

const Section = () => {
	return (
		<>
			<div style={{ width: 1200 }} className="sectionParent p-10 bg-gray-100 ">
				<Space direction="vertical" size={90}>
					<SectionFrom />
					<SectionSummary />
					<UnitDepartmentSummary />
				</Space>
			</div>
		</>
	);
};

export default Section;
