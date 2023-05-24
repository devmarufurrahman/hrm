import { Button, Form, Input, Radio, Select, Space, Typography } from "antd";
import { useState } from "react";

const Company = () => {
	const [value, setValue] = useState(1);
	const onChange = (e) => {
		console.log("radio checked", e.target.value);
		setValue(e.target.value);
	};
	return (
		<>
			<div
				style={{ width: 900 }}
				className="modeParent p-10 bg-gray-100 flex justify-center ">
				<div className="">
					<Typography.Title>Company Details</Typography.Title>
					<Form>
						<Space align="start" direction="vertical">
							<Form.Item label="User" name="username">
								<Select
									style={{ width: 300 }}
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
							<Radio.Group onChange={onChange} value={value}>
								<Space direction="vertical">
									<Radio value={1}>Normal Mode</Radio>
									<Radio value={2}>Compliance Mode</Radio>
									<Radio value={3}>Third Mode</Radio>
									<Radio value={4}>
										More...
										{value === 4 ? (
											<Input
												style={{
													width: 100,
													marginLeft: 10,
												}}
											/>
										) : null}
									</Radio>
								</Space>
							</Radio.Group>
							<div>
								<Button type="primary" danger>
									Save
								</Button>
							</div>
						</Space>
					</Form>
				</div>
			</div>
		</>
	);
};

export default Company;
