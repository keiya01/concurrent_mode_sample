import React from "react";
import UserProfile from "./UserProfile";
import Layout from "./Layout";
import MainHeader from "./MainHeader";

const App = () => {
	return (
		<>
			<MainHeader>
				<UserProfile />
			</MainHeader>
			<Layout/>
		</>
	);
};

export default App;
