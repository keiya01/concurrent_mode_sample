import React from "react";
import styled from "styled-components";

const Form = styled.form`display: flex;`;

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

const SearchForm = () => {
	return (
		<Form>
			<Input type="test" aria-label="Search GitHub users" placeholder="Search GitHub users" />
		</Form>
	);
};

export default SearchForm;
