import { Button, Form, Input, Space, Typography } from "antd";
import { AiOutlineReload } from "react-icons/ai";
import { BiSave } from "react-icons/bi";

const DesignationDetails = () => {
	return (
		<div className="unitDetailsTable bg-white p-7 shadow-md rounded-lg">
			<Typography.Title
				level={4}
				type="success"
				keyboard
				className="text-center">
				Designation Group Details
			</Typography.Title>
			<Form style={{ width: 600 }}>
				<Form.Item label="Designation Group  Name" name="designationName">
					<Input placeholder="Designation Group  Name" />
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

export default DesignationDetails;
