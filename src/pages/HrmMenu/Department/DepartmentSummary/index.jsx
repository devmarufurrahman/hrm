import { Space, Table, Typography } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Company = () => {
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
			<div className="bg-white p-7 shadow-md rounded-lg">
				<Typography.Title
					level={4}
					type="success"
					keyboard
					className="text-center">
					Department Summery
				</Typography.Title>

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
		</>
	);
};

export default Company;