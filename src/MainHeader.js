import React from "react";
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

const MainHeader = () => {
	return (
		<Header>
			<div style={{ display: "flex", flex: 1 }} />
			<SearchForm />
		</Header>
	);
};

export default MainHeader;
