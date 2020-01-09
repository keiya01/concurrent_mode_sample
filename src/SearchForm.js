import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`display: flex;`;

const SearchInput = styled.input`
	border: 1px solid #fff;
	background-color: #fff;
	font-size: 16px;
	padding: 5px 10px;
	width: 220px;
	border-radius: 3px;
	&::placeholder {
		color: #aaa;
	}
`;

const SearchForm = () => {
	return (
		<SearchForm>
			<SearchInput type="test" aria-label="Search GitHub users" placeholder="Search GitHub users" />
		</SearchForm>
	);
};

export default SearchForm;
