import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const UserNameWrapper = styled.div`
	display: inline-block;
	padding-bottom: 10px;
`;

const UserName = styled.h1`
	font-size: 30px;
	color: #fff;
`;

const UserInfo = (props) => {
	const userInfo = props.resouces.detail.read();
	return (
		<Container>
			<UserNameWrapper>
				<UserName>{userInfo.name}</UserName>
			</UserNameWrapper>
		</Container>
	);
};

export default UserInfo;
