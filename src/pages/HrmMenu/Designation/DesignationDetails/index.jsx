import { Button, Checkbox, Form, Input, Select, Space, Typography } from "antd";
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
				Designation Details
			</Typography.Title>
			<Form style={{ width: 600 }}>
				<Form.Item label="Designation Name" name="designationName">
					<Input placeholder="Designation Name" />
				</Form.Item>
				<Form.Item
					label="Designation Name (Bangla)"
					name="designationNameBangla">
					<Input placeholder="Designation Name" />
				</Form.Item>
				<Form.Item label="Group" name="group">
					<Select
						style={{ width: 300 }}
						showSearch
						placeholder="Select company"
						optionFilterProp="children"
						filterOption={(input, option) =>
							(option?.label ?? "").toLowerCase().includes(input.toLowerCase())
						}
						options={[
							{
								value: "officer",
								label: "Officer",
							},
							{
								value: "operator",
								label: "Operator",
							},
						]}
					/>
				</Form.Item>
				<Form.Item label="Grade" name="grade">
					<Input placeholder="group name" />
				</Form.Item>
				<Form.Item label="Order By" name="orderBy">
					<Input />
				</Form.Item>
				<Form.Item label="Is Active" name="isActive">
					<Checkbox></Checkbox>
				</Form.Item>
				<Form.Item label="Is Delete" name="isActive">
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

export default DesignationDetails;
