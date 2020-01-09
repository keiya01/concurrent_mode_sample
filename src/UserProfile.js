import React, { Suspense, useState } from "react";
import fetchUserInfo from "../services/userInfoService";
import UserInfo from "./UserInfo";
import RepoList from "./RepoList";
import LoadingText from "./LoadingText";
import styled from "styled-components";

const Container = styled.div`padding: 150px 0;`;

const initialResouces = fetchUserInfo("keiya01", 10);

const UserProfile = () => {
	const [ resouces, setResouces ] = useState(initialResouces);

	return (
		<Suspense fallback={<LoadingText>Loading profile...</LoadingText>}>
			<Container>
				<UserInfo resouces={resouces} />
				<Suspense fallback={<LoadingText>Loading repositories...</LoadingText>}>
					<RepoList resouces={resouces} setResouces={setResouces} username="keiya01" limit={10} page={1} />
				</Suspense>
			</Container>
		</Suspense>
	);
};

export default UserProfile;
