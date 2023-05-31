import { Button, Checkbox, Form, Input, Space, Typography } from "antd";
import { AiOutlineReload } from "react-icons/ai";
import { BiSave } from "react-icons/bi";

const WingDetails = () => {
	return (
		<div className="unitDetailsTable bg-white p-7 shadow-md rounded-lg">
			<Typography.Title
				level={4}
				type="success"
				keyboard
				className="text-center">
				Wing Details
			</Typography.Title>
			<Form style={{ width: 600 }}>
				<Form.Item label="Wing Name" name="wingName">
					<Input placeholder="Wing Name" />
				</Form.Item>
				<Form.Item label="Wing Name (Bangla)" name="wingNameBangla">
					<Input placeholder="Wing Name" />
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

export default WingDetails;
