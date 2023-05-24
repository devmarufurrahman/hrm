import { Space } from "antd";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";
import PageContent from "./Layout/Content";
import Footer from "./Layout/Footer";
import { useState } from "react";

function App() {
	const [collapsed, setCollapsed] = useState(false);
	const handleCollapse = () => {
		!collapsed ? setCollapsed(true) : setCollapsed(false);
	};
	return (
		<>
			<Header handleCollapse={handleCollapse} collapsed={collapsed} />
			<Space align="start">
				<Sidebar collapsed={collapsed} />
				<PageContent />
			</Space>
			<Footer />
		</>
	);
}

export default App;
