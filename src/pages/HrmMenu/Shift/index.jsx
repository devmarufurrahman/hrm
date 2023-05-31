import { Space } from "antd";
import NewShift from "./NewShift";

const Shift = () => {
	return (
		<>
			<div className="shift p-10 bg-gray-100 flex justify-center items-center">
				<Space direction="vertical" size={70}>
					<NewShift />
				</Space>
			</div>
		</>
	);
};

export default Shift;
