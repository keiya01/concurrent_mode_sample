import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const AvatarWrapper = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 10px;
`;

const Avatar = styled.img`
	object-fit: contain;
	width: 55px;
	height: 55px;
	border-radius: 50%;
	margin-right: 15px;
	border: 1px solid #fff;
`;

const UserName = styled.h1`
	font-size: 30px;
	color: #fff;
`;

const UserInfo = (props) => {
	const userInfo = props.resouces.detail.read();
	return (
		<Container>
			<AvatarWrapper>
				<Avatar src={userInfo.avatar_url} />
				<UserName>{userInfo.name}</UserName>
			</AvatarWrapper>
		</Container>
	);
};

export default UserInfo;
