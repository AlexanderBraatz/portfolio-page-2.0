import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';

const NavBar = () => {
	return (
		<Wrapper>
			<Heading>Alexander Braatz</Heading>
			<Menu>
				<MenuButton text={'about'} />
				<MenuButton text={'blog'} />
				<MenuButton text={'projects'} />
				<MenuButton text={'contact'} />
			</Menu>
		</Wrapper>
	);
};

export default NavBar;

const Wrapper = styled.div`
	width: 100%;
	height: 10rem;
	background-color: ${props => props.theme.light.secondary};
`;

const Heading = styled.p`
	color: white;
	font-family: Muli, Helvetica, sans-serif;
	font-size: 1.8rem;
	font-weight: bold;
	margin: 0;
	height: 4rem;
	padding-top: 1.2rem;
`;

const Menu = styled.div`
	padding: 0 5rem 0 5rem;
	display: flex;
	justify-content: space-evenly;
`;
