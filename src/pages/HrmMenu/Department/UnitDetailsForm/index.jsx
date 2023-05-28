import { Button, Checkbox, Form, Input, Space, Typography } from "antd";
import { AiOutlineReload } from "react-icons/ai";
import { BiSave } from "react-icons/bi";

const index = () => {
	return (
		<div className="unitDetailsTable bg-white p-7 shadow-md rounded-lg">
			<Typography.Title
				level={4}
				type="success"
				keyboard
				className="text-center">
				Department Details
			</Typography.Title>
			<Form style={{ width: 600 }}>
				<Form.Item label="Department Name" name="departmentName">
					<Input placeholder="Department Name" />
				</Form.Item>
				<Form.Item label="Department Name (Bangla)" name="departmentNameBangla">
					<Input placeholder="Department Name" />
				</Form.Item>
				<Form.Item label="Is Active" name="isActive">
					<Checkbox></Checkbox>
				</Form.Item>
			</Form>
			<div className="flex justify-center items-center">
				<Space>
					<Button style={{ backgroundColor: "#3de058" }} icon={<BiSave />}>
						Save
					</Button>
					<Button
						style={{ backgroundColor: "#ed6815" }}
						icon={<AiOutlineReload />}>
						Clear
					</Button>
				</Space>
			</div>
		</div>
	);
};

export default index;
