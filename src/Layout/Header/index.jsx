import {
	HomeOutlined,
	LogoutOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Space, Typography, theme } from "antd";
const { Header } = Layout;

const LayoutHeader = ({ handleCollapse, collapsed }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout>
			<Header
				collapsed={collapsed}
				style={{
					padding: 0,
					background: colorBgContainer,
				}}>
				<div className="flex justify-between">
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={handleCollapse}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
						}}
					/>
					<Typography.Title>HRM</Typography.Title>
					<Space>
						<Button type="primary" icon={<HomeOutlined />}>
							Dashboard
						</Button>

						<Button type="primary" danger icon={<LogoutOutlined />}>
							Logout
						</Button>
					</Space>
				</div>
			</Header>
		</Layout>
	);
};

export default LayoutHeader;
