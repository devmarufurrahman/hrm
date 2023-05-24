import { Form, Select, Typography } from "antd";

const HomeModeSetup = () => {
	return (
		<>
			<div className="modeParent p-10 ">
				<Typography.Title>HRM Mode Setup</Typography.Title>
				<Form>
					<Form.Item label="User" name="username">
						<Select
							showSearch
							placeholder="Select a person"
							optionFilterProp="children"
							filterOption={(input, option) =>
								(option?.label ?? "")
									.toLowerCase()
									.includes(input.toLowerCase())
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
				</Form>
			</div>
		</>
	);
};

export default HomeModeSetup;
