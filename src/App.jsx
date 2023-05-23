import { Space } from "antd";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";
import PageContent from "./Layout/Content";
import Footer from "./Layout/Footer";

function App() {
	return (
		<>
			<Header />
			<Space>
				<Sidebar />
				<PageContent />
			</Space>
			<Footer />
		</>
	);
}

export default App;
