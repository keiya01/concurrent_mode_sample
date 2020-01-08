import React from "react";

const UserInfo = (props) => {
	const userInfo = props.resouces.detail.read();
	return (
		<div>
			<h1>{userInfo.name}</h1>
		</div>
	);
};

export default UserInfo;
