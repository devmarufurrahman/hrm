import { Form, Select, Typography } from "antd";
import { Option } from "antd/es/mentions";

const NewShift = () => {
	return (
		<>
			<div className="newShift  bg-white p-7 shadow-md rounded-lg">
				<Typography.Title
					level={4}
					type="success"
					keyboard
					className="text-center">
					Shift Details
				</Typography.Title>
				<div className="text-teal-500 font-semibold text-2xl text-left">
					New Shift Entry
					{/* <Form>
						<Form.Item label="Company">
							<Select placeholder="Select a option ">
								<Option value="male">male</Option>
								<Option value="female">female</Option>
								<Option value="other">other</Option>
							</Select>
						</Form.Item>
					</Form> */}
				</div>
			</div>
		</>
	);
};

export default NewShift;
