import { HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";

const Header = () => {
	return (
		<div className="flex justify-between">
			<Typography.Title>HRM</Typography.Title>
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
