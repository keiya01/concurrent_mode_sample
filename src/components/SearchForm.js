import React, { useState, useDeferredValue, useEffect, useCallback, useTransition } from "react";
import styled from "styled-components";
import fetchUserInfo, { searchUser } from "../services/userInfoService";

const Form = styled.form`
	position: relative;
	display: flex;
`;

const Input = styled.input`
	border: 1px solid #fff;
	background-color: #fff;
	font-size: 15px;
	padding: 5px 10px;
	width: 220px;
	border-radius: 3px;
	&::placeholder {
		color: #aaa;
		font-size: 15px;
	}
`;

const UserListContainer = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	top: 36px;
	background-color: #232323;
	width: 220px;
	padding: 10px 0;
`;

const UserList = styled.ul`
	display: flex;
	flex-direction: column;
	flex: 1;
	list-style: none;
	margin: 0 10px;
`;

const UserItem = styled.li`
	display: flex;
	padding: 10px;
	margin: 10px 0;
	align-items: center;
	cursor: pointer;
	transition: background-color 200ms ease-in;
	${({ isActive }) =>
		isActive &&
		`
		background-color: #303030;
	`} &:hover {
		background-color: #303030;
	}
`;

const Avatar = styled.img`
	object-fit: contain;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin-right: 10px;
`;

const Name = styled.p`
	font-size: 13px;
	font-weight: bold;
	color: #fff;
`;

const SearchForm = ({ setResouces }) => {
	const [ text, setText ] = useState("");
	const [ users, setUsers ] = useState([]);
	const [ activeID, setActiveID ] = useState(0);
	const [ startTransition, isPending ] = useTransition({ timeoutMs: 3000 });
	const deferredText = useDeferredValue(text, { timeoutMs: 1500 });

	const handleOnSubmit = useCallback((e) => {
		e.preventDefault();
	}, []);

	const handleOnChange = useCallback((e) => {
		setText(e.target.value);
	}, []);

	const handleOnClick = (user) => () => {
		setActiveID(user.id);
		startTransition(() => {
			setText("");
			setUsers([]);
			setResouces(fetchUserInfo(user.login, 20));
		});
	};

	useEffect(
		() => {
			const fetch = async () => {
				const searchUsers = await searchUser(deferredText, 7);
				setUsers(searchUsers.items);
			};
			if (deferredText) {
				fetch();
			}
		},
		[ deferredText ]
	);

	return (
		<Form onSubmit={handleOnSubmit}>
			<Input
				type="test"
				aria-label="Search GitHub users"
				placeholder="Search GitHub users"
				onChange={handleOnChange}
				value={text}
			/>
			{users &&
			users.length > 0 &&
			text && (
				<UserListContainer>
					<UserList>
						{users.map((user) => {
							const isActive = isPending && user.id === activeID;
							return (
								<UserItem disabled={isPending} onClick={handleOnClick(user)} key={user.id} isActive={isActive}>
									<Avatar src={user.avatar_url} />
									<Name>{isActive ? "loading profile ..." : user.login}</Name>
								</UserItem>
							);
						})}
					</UserList>
				</UserListContainer>
			)}
		</Form>
	);
};

export default SearchForm;
