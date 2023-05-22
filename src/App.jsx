import { Space } from "antd";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

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
