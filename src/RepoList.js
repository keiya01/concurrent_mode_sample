import React, { useTransition, useState, useContext } from "react";
import styled from "styled-components";
import { wrapPromise, fetchUserRepos } from "../services/userInfoService";
import { MainHeaderContext } from "./MainHeader";

const Container = styled.div`
	width: 90%;
	max-width: 350px;
	margin: 0 auto;
`;

const List = styled.ul`
	padding: 0;
	width: 100%;
	list-style: none;
	margin-top: 80px;
`;

const Item = styled.li`
	margin-top: 10px;
	width: 100%;
	cursor: pointer;
`;

const Anchor = styled.a`
	display: block;
	text-decoration: none;
	padding: 20px;
	width: 100%;
	border-radius: 10px;
	transition: background-color 200ms ease-in;
	&:hover {
		background-color: #303030;
	}
`;

const Name = styled.h3`
	font-size: 16px;
	color: #fff;
`;

const Description = styled.p`
	font-size: 15px;
	color: #999;
	margin-top: 10px;
`;

const ButtonContainer = styled.div`
	display: flex;
	padding: 0 15px;
	margin-top: 40px;
`;

const Button = styled.button`
	padding: 10px 30px;
	border-radius: 5px;
	font-size: 14px;
	cursor: pointer;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex: 1;
`;

const PrevButton = styled(Button)`
  background-color: #666;
  border: 1px solid #666;
  color: #fff;
`;

const NextButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #fff;
  color: #555;
`;

const RepoList = ({ resouces, setResouces, username, limit, page: _page }) => {
	const repos = resouces.repos.read();
	const [ startTransition, isPending ] = useTransition({
		timeoutMs: 3000
	});
	const [ page, setPage ] = useState(_page);
	const { setIsLoading } = useContext(MainHeaderContext);

	const hasNext = repos.length >= limit;
	const hasPrev = page > 1;

	const handleFetchData = (nextPage) => {
		setIsLoading(true);
		startTransition(() => {
			setPage(nextPage);
			setResouces((prev) => ({
				...prev,
				repos: wrapPromise(fetchUserRepos(username, limit, nextPage))
			}));
			setIsLoading(false);
		});
	};

	const handleOnClickNext = () => {
		handleFetchData(page + 1);
	};

	const handleOnClickPrev = () => {
		handleFetchData(page - 1);
	};

	return (
		<Container>
			<List>
				{repos.map((repo) => (
					<Item key={repo.id}>
						<Anchor href={repo.html_url} target="_blank" rel="noopener">
							<Name>{repo.name}</Name>
							<Description>{repo.description || "No description"}</Description>
						</Anchor>
					</Item>
				))}
			</List>
			<ButtonContainer>
				<ButtonWrapper>
					{hasPrev && (
						<PrevButton disabled={isPending || !hasPrev} onClick={handleOnClickPrev}>
							prev
						</PrevButton>
					)}
				</ButtonWrapper>
				{hasNext && (
					<NextButton disabled={isPending || !hasNext} onClick={handleOnClickNext}>
						next
					</NextButton>
				)}
			</ButtonContainer>
		</Container>
	);
};

export default RepoList;
