import {
	Button,
	Checkbox,
	Form,
	Input,
	Radio,
	Select,
	Space,
	Typography,
} from "antd";
import { BiSave } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
import Search from "antd/es/input/Search";

const Company = () => {
	const onSearch = (e) => {};
	return (
		<>
			<div style={{ width: 900 }} className="modeParent p-10 bg-gray-100 ">
				<Space size={90} direction="vertical">
					<div className="bg-white p-7 shadow-md rounded-lg">
						<Typography.Title
							level={4}
							type="success"
							keyboard
							className="text-center">
							Company Details
						</Typography.Title>
						<Form style={{ width: 600 }}>
							<Form.Item label="Company Name" name="companyName">
								<Input placeholder="Company Name" />
							</Form.Item>
							<Form.Item label="Company Name (Bangla)" name="companyNameBangla">
								<Input placeholder="Company Name" />
							</Form.Item>
							<Form.Item label="Is Active" name="isActive">
								<Checkbox></Checkbox>
							</Form.Item>
						</Form>
						<Space>
							<Button icon={<BiSave />}>Save</Button>
							<Button icon={<AiOutlineReload />}>Clear</Button>
						</Space>
					</div>
					<div className="bg-white p-7 shadow-md rounded-lg">
						<Typography.Title
							level={4}
							type="success"
							keyboard
							className="text-center">
							Company Summery
						</Typography.Title>
						<Search
							placeholder="input search text"
							onSearch={onSearch}
							enterButton
						/>
					</div>
				</Space>
			</div>
		</>
	);
};

export default Company;
