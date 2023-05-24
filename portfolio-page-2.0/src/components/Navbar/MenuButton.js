import React from 'react';
import styled from 'styled-components';

const MenuButton = props => {
	return (
		<Wrapper>
			<Text>{props.text}</Text>
			<Line1 />
			<Line2 />
		</Wrapper>
	);
};

export default MenuButton;

const Wrapper = styled.div`
	width: fit-content;
	height: 4rem;
	/* this needs to be its own component with a on hover event hadler to expand and move the Line1 and Line 2 elements */
`;

const Text = styled.div`
	color: ${props => props.theme.light.primary};
	font-family: Muli, Helvetica, sans-serif;
	font-size: 1.8rem;
	font-weight: bold;
	width: 100%;
`;

const Line1 = styled.div`
	background-color: #ff6651;
	height: 0.3rem;
	width: 100%;
`;
const Line2 = styled.div`
	background-color: #ff6651;
	height: 0.3rem;
	width: 100%;
`;
