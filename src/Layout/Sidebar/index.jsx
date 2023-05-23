import { Menu } from "antd";
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

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<>
			<Menu
				onClick={({ key }) => {
					navigate(key);
				}}
				items={[
					{ label: "Dashboard", key: "/", icon: <AiOutlineHome /> },
					{ label: "Settings", key: "/settings", icon: <AiOutlineSetting /> },
					{ label: "HRM", key: "", icon: <FiUsers /> },
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
		</>
	);
};

export default Sidebar;
