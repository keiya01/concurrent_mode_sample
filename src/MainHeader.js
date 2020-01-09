import React, { createContext, useState, useDeferredValue } from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const Header = styled.header`
	display: flex;
	flex: 1;
	height: 50px;
	width: 100%;
	align-items: center;
	padding: 0 20px;
	position: fixed;
	top: 0;
	background-color: #191919;
	box-shadow: 0px 2px 5px #212121;
`;

const LoadingHeader = styled.div`
	position: fixed;
	top: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #5dab29;
	padding: 3px 0;
`;

const LoadingText = styled.p`
	font-size: 13px;
	color: #fff;
`;

export const MainHeaderContext = createContext({ isLoading: false, setIsLoading: () => {} });

const MainHeader = (props) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const contextValue = {
		isLoading,
		setIsLoading
	};
	const deferredIsLoading = useDeferredValue(isLoading, { timeoutMs: 300 });

	return (
		<MainHeaderContext.Provider value={contextValue}>
			<Header>
				<div style={{ display: "flex", flex: 1 }} />
				<SearchForm />
			</Header>
			{deferredIsLoading && (
				<LoadingHeader>
					<LoadingText>loading now ...</LoadingText>
				</LoadingHeader>
			)}
			{props.children}
		</MainHeaderContext.Provider>
	);
};

export default MainHeader;
