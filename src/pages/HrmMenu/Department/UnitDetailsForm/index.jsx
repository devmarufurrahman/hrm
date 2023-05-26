import { Button, Checkbox, Form, Input, Select, Space, Typography } from "antd";
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
				Unit Details
			</Typography.Title>
			<Form style={{ width: 600 }}>
				<Form.Item label="Company Name" name="companyName">
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
								value: "jack",
								label: "Jack",
							},
							{
								value: "lucy",
								label: "Lucy",
							},
							{
								value: "tom",
								label: "Tom",
							},
						]}
					/>
				</Form.Item>
				<Form.Item label="Unit Name" name="unitName">
					<Input placeholder="Unit Name" />
				</Form.Item>
				<Form.Item label="Unit Name (Bangla)" name="unitNameBangla">
					<Input placeholder="Unit Name" />
				</Form.Item>
				<Form.Item label="Is Active" name="isActive">
					<Checkbox></Checkbox>
				</Form.Item>
			</Form>
			<div className="flex justify-center items-center">
				<Space>
					<Button icon={<BiSave />}>Save</Button>
					<Button icon={<AiOutlineReload />}>Clear</Button>
				</Space>
			</div>
		</div>
	);
};

export default index;
