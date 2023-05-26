import { Button, Checkbox, Form, Input, Space, Table, Typography } from "antd";
import { BiSave } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
import Search from "antd/es/input/Search";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Company = () => {
	const onSearch = (value) => {
		console.log(value);
	};

	const columns = [
		{
			title: "Company Name",
			dataIndex: "name",
			filters: [
				{
					text: "Joe",
					value: "Joe",
				},
				{
					text: "Category 1",
					value: "Category 1",
					children: [
						{
							text: "Yellow",
							value: "Yellow",
						},
						{
							text: "Pink",
							value: "Pink",
						},
					],
				},
				{
					text: "Category 2",
					value: "Category 2",
					children: [
						{
							text: "Green",
							value: "Green",
						},
						{
							text: "Black",
							value: "Black",
						},
					],
				},
			],
			filterMode: "tree",
			filterSearch: true,
			onFilter: (value, record) => record.name.includes(value),
			width: "400px",
		},
		{
			title: "Company Name (Bangla)",
			dataIndex: "name",
			filters: [
				{
					text: "Joe",
					value: "Joe",
				},
				{
					text: "Category 1",
					value: "Category 1",
					children: [
						{
							text: "Yellow",
							value: "Yellow",
						},
						{
							text: "Pink",
							value: "Pink",
						},
					],
				},
				{
					text: "Category 2",
					value: "Category 2",
					children: [
						{
							text: "Green",
							value: "Green",
						},
						{
							text: "Black",
							value: "Black",
						},
					],
				},
			],
			filterMode: "tree",
			filterSearch: true,
			onFilter: (value, record) => record.name.includes(value),
			width: "400px",
		},
		{
			title: "Age",
			dataIndex: "age",
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: "Address",
			dataIndex: "address",
			filters: [
				{
					text: "London",
					value: "London",
				},
				{
					text: "New York",
					value: "New York",
				},
			],
			onFilter: (value, record) => record.address.startsWith(value),
			filterSearch: true,
			width: "500px",
		},
		{
			title: "Action",
			dataIndex: "action",
			render: (_, record) => (
				<Space size={"middle"}>
					<EditOutlined
						style={{
							cursor: "pointer",
							color: "green",
							fontSize: 20,
						}}
					/>
					<DeleteOutlined
						style={{
							cursor: "pointer",
							color: "#FF3D00",
							fontSize: 20,
						}}
					/>
				</Space>
			),
		},
	];

	const data = [
		{
			key: "1",
			name: "John Brown",
			age: 32,
			address: "New York No. 1 Lake Park",
		},
		{
			key: "2",
			name: "Jim Green",
			age: 42,
			address: "London No. 1 Lake Park",
		},
		{
			key: "3",
			name: "Joe Black",
			age: 32,
			address: "Sydney No. 1 Lake Park",
		},
		{
			key: "4",
			name: "Jim Red",
			age: 32,
			address: "London No. 2 Lake Park",
		},
	];

	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};
	return (
		<>
			<div style={{ width: 1200 }} className="modeParent p-10 bg-gray-100 ">
				<Space size={90} direction="vertical">
					<div className="bg-white p-7 shadow-md rounded-lg">
						<Typography.Title
							level={4}
							type="success"
							keyboard
							className="text-center">
							Company Details
						</Typography.Title>
						<Form style={{ width: 600 }}>
							<Form.Item label="Company Name" name="companyName">
								<Input placeholder="Company Name" />
							</Form.Item>
							<Form.Item label="Company Name (Bangla)" name="companyNameBangla">
								<Input placeholder="Company Name" />
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

					{/* =================================================== */}

					<div className="bg-white p-7 shadow-md rounded-lg">
						<Typography.Title
							level={4}
							type="success"
							keyboard
							className="text-center">
							Company Summery
						</Typography.Title>
						<div className="flex justify-center items-center mt-7">
							<Search
								className="w-56 text-center "
								placeholder="input search text"
								onSearch={onSearch}
							/>
						</div>

						<div className="table mx-auto mt-7">
							<Table
								columns={columns}
								dataSource={data}
								onChange={onChange}
								style={{ width: 800 }}
								pagination={{
									pageSize: 2,
								}}
							/>
						</div>
					</div>
				</Space>
			</div>
		</>
	);
};

export default Company;
