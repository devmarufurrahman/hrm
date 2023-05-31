import { Space, Table, Typography } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const DesignationSummary = () => {
	const columns = [
		{
			title: "Designation Group Name",
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
			title: "Action",
			dataIndex: "action",
			render: () => (
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
			name: "Operator",
			activity: "Active",
		},
		{
			key: "2",
			name: "Operator",
			age: 42,
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

export default DesignationSummary;
