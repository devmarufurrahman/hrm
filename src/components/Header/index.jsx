import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const Header = () => {
	return (
		<div className="flex justify-between">
			<h1 className="text-6xl">HRM</h1>
			<Space wrap>
				<Button icon={<HomeOutlined />}>Dashboard</Button>

				<Button type="primary" danger icon={<LogoutOutlined />}>
					Logout
				</Button>
			</Space>
		</div>
	);
};

export default Header;
