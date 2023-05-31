import { Space } from "antd";
import SectionFrom from "./SectionFrom";
import SectionSummary from "./SectionSummary";
import UnitDepartmentSummary from "./UnitDepartmentSummary";

const Section = () => {
	return (
		<>
			<div className="sectionParent p-10 bg-gray-100 flex justify-center items-center">
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
