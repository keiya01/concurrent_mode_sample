import React, { Suspense } from "react";
import UserInfo from "./UserInfo";
import RepoList from "./RepoList";
import LoadingText from "./LoadingText";
import styled from "styled-components";

const Container = styled.div`padding: 150px 0;`;

const UserProfile = ({ resouces, setResouces }) => {
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
