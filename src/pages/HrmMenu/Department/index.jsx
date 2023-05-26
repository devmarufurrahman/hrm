import { Space } from "antd";
import UnitDetailsForm from "./UnitDetailsForm";
import DepartmentSummary from "./DepartmentSummary";
import DepartmentUnit from "./DepartmentUnit";

const Department = () => {
	// const columns = [
	// 	{
	// 		title: "Unit Name",
	// 		dataIndex: "name",
	// 		filters: [
	// 			{
	// 				text: "Joe",
	// 				value: "Joe",
	// 			},
	// 			{
	// 				text: "Category 1",
	// 				value: "Category 1",
	// 				children: [
	// 					{
	// 						text: "Yellow",
	// 						value: "Yellow",
	// 					},
	// 					{
	// 						text: "Pink",
	// 						value: "Pink",
	// 					},
	// 				],
	// 			},
	// 			{
	// 				text: "Category 2",
	// 				value: "Category 2",
	// 				children: [
	// 					{
	// 						text: "Green",
	// 						value: "Green",
	// 					},
	// 					{
	// 						text: "Black",
	// 						value: "Black",
	// 					},
	// 				],
	// 			},
	// 		],
	// 		filterMode: "tree",
	// 		filterSearch: true,
	// 		onFilter: (value, record) => record.name.includes(value),
	// 		width: "400px",
	// 	},
	// 	{
	// 		title: "Company Name ",
	// 		dataIndex: "name",
	// 		filters: [
	// 			{
	// 				text: "Joe",
	// 				value: "Joe",
	// 			},
	// 			{
	// 				text: "Category 1",
	// 				value: "Category 1",
	// 				children: [
	// 					{
	// 						text: "Yellow",
	// 						value: "Yellow",
	// 					},
	// 					{
	// 						text: "Pink",
	// 						value: "Pink",
	// 					},
	// 				],
	// 			},
	// 			{
	// 				text: "Category 2",
	// 				value: "Category 2",
	// 				children: [
	// 					{
	// 						text: "Green",
	// 						value: "Green",
	// 					},
	// 					{
	// 						text: "Black",
	// 						value: "Black",
	// 					},
	// 				],
	// 			},
	// 		],
	// 		filterMode: "tree",
	// 		filterSearch: true,
	// 		onFilter: (value, record) => record.name.includes(value),
	// 		width: "400px",
	// 	},
	// 	{
	// 		title: "Activity ",
	// 		dataIndex: "name",
	// 		filters: [
	// 			{
	// 				text: "Joe",
	// 				value: "Joe",
	// 			},
	// 			{
	// 				text: "Category 1",
	// 				value: "Category 1",
	// 				children: [
	// 					{
	// 						text: "Yellow",
	// 						value: "Yellow",
	// 					},
	// 					{
	// 						text: "Pink",
	// 						value: "Pink",
	// 					},
	// 				],
	// 			},
	// 			{
	// 				text: "Category 2",
	// 				value: "Category 2",
	// 				children: [
	// 					{
	// 						text: "Green",
	// 						value: "Green",
	// 					},
	// 					{
	// 						text: "Black",
	// 						value: "Black",
	// 					},
	// 				],
	// 			},
	// 		],
	// 		filterMode: "tree",
	// 		filterSearch: true,
	// 		onFilter: (value, record) => record.name.includes(value),
	// 		width: "400px",
	// 	},

	// 	{
	// 		title: "Address",
	// 		dataIndex: "address",
	// 		filters: [
	// 			{
	// 				text: "London",
	// 				value: "London",
	// 			},
	// 			{
	// 				text: "New York",
	// 				value: "New York",
	// 			},
	// 		],
	// 		onFilter: (value, record) => record.address.startsWith(value),
	// 		filterSearch: true,
	// 		width: "500px",
	// 	},
	// 	{
	// 		title: "Action",
	// 		dataIndex: "action",
	// 		render: (_, record) => (
	// 			<Space size={"middle"}>
	// 				<EditOutlined
	// 					style={{
	// 						cursor: "pointer",
	// 						color: "green",
	// 						fontSize: 20,
	// 					}}
	// 				/>
	// 				<DeleteOutlined
	// 					style={{
	// 						cursor: "pointer",
	// 						color: "#FF3D00",
	// 						fontSize: 20,
	// 					}}
	// 				/>
	// 			</Space>
	// 		),
	// 	},
	// ];

	// const data = [
	// 	{
	// 		key: "1",
	// 		name: "John Brown",
	// 		age: 32,
	// 		address: "New York No. 1 Lake Park",
	// 	},
	// 	{
	// 		key: "2",
	// 		name: "Jim Green",
	// 		age: 42,
	// 		address: "London No. 1 Lake Park",
	// 	},
	// 	{
	// 		key: "3",
	// 		name: "Joe Black",
	// 		age: 32,
	// 		address: "Sydney No. 1 Lake Park",
	// 	},
	// 	{
	// 		key: "4",
	// 		name: "Jim Red",
	// 		age: 32,
	// 		address: "London No. 2 Lake Park",
	// 	},
	// ];

	// const onChange = (pagination, filters, sorter, extra) => {
	// 	console.log("params", pagination, filters, sorter, extra);
	// };
	return (
		<>
			<div style={{ width: 1200 }} className="modeParent p-10 bg-gray-100 ">
				<Space size={90} direction="vertical">
					<UnitDetailsForm />

					<DepartmentUnit />

					<DepartmentSummary />
				</Space>
			</div>
		</>
	);
};

export default Department;
