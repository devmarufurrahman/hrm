import { Space, Table, Typography } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const DesignationSummary = () => {
	const columns = [
		{
			title: "Designation Name",
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
			title: "Designation Name (Bangla)",
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
			title: "Group",
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
			title: "Grade",
			dataIndex: "age",
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
			title: "Order By",
			dataIndex: "age",
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
			title: "Activity",
			dataIndex: "activity",
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
			onFilter: (value, record) => record.activity.startsWith(value),
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
			activity: "Active",
		},
		{
			key: "2",
			name: "Jim Green",
			age: 42,
			activity: "Active",
		},
		{
			key: "3",
			name: "Joe Black",
			age: 32,
			activity: "Inactive",
		},
		{
			key: "4",
			name: "Jim Red",
			age: 32,
			activity: "Active",
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
					Designation Summery
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

export default DesignationSummary;
