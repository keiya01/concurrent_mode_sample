import React, { useState } from "react";
import UserProfile from "./UserProfile";
import Layout from "./Layout";
import MainHeader from "./MainHeader";
import fetchUserInfo from "../services/userInfoService";

const initialResouces = fetchUserInfo("octocat", 20);

const App = () => {
	const [ resouces, setResouces ] = useState(initialResouces);

	return (
		<>
			<MainHeader setResouces={setResouces}>
				<UserProfile resouces={resouces} setResouces={setResouces}/>
			</MainHeader>
			<Layout/>
		</>
	);
};

export default App;
