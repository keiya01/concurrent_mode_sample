import React, { Suspense } from "react";
import fetchUserInfo from "../services/userInfoService";
import UserInfo from "./UserInfo";

const resouces = fetchUserInfo("keiya01");

const UserProfile = () => {
	return (
		<Suspense fallback={<p>loading...</p>}>
			<UserInfo resouces={resouces} />
		</Suspense>
	);
};

export default UserProfile;
