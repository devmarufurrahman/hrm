import { Layout, Menu } from "antd";
import {
	AiOutlineHome,
	AiOutlineSetting,
	AiOutlineSchedule,
	AiOutlineAppstoreAdd,
	AiOutlineApartment,
	AiFillSignal,
	AiOutlineStock,
	AiOutlineFileDone,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BiTransfer, BiDollar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
	const navigate = useNavigate();
	return (
		<>
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<Menu
						theme="light"
						onClick={({ key }) => {
							navigate(key);
						}}
						defaultSelectedKeys={[window.location.pathname]}
						items={[
							{ label: "Dashboard", key: "/", icon: <AiOutlineHome /> },
							{
								label: "Settings",
								key: "/settings",
								icon: <AiOutlineSetting />,
							},
							{
								label: "HRM",
								key: "/hrm",
								icon: <FiUsers />,
								children: [
									{ label: "Hrm Mode Setup", key: "/modeSetup" },
									{ label: "Company", key: "/company" },
									{ label: "Unit", key: "/unit" },
									{ label: "Department", key: "/department" },
									{ label: "Section", key: "/section" },
									{ label: "Designation", key: "/designation" },
									{ label: "Wing", key: "/wing" },
								],
							},
							{ label: "Attendants", key: "", icon: <AiOutlineSchedule /> },
							{ label: "Application", key: "", icon: <AiOutlineAppstoreAdd /> },
							{ label: "Transfer", key: "", icon: <BiTransfer /> },
							{ label: "Separation", key: "", icon: <AiOutlineApartment /> },
							{ label: "Payroll", key: "", icon: <BiDollar /> },
							{ label: "Promotion", key: "", icon: <AiOutlineStock /> },
							{ label: "Increment", key: "", icon: <AiFillSignal /> },
							{ label: "IQMS", key: "" },
							{ label: "PMS", key: "" },
							{ label: "Conference", key: "" },
							{ label: "Report", key: "", icon: <AiOutlineFileDone /> },
						]}></Menu>
				</Sider>
			</Layout>
		</>
	);
};

export default Sidebar;
