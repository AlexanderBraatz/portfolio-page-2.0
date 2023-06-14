import React, { useState } from 'react';
import styled from 'styled-components';

const LinkIcons = props => {
	const [hover, setHover] = useState(false);

	const handleMouseOver = dig => {
		setHover(dig);
	};
	const handleMouseLeave = () => {
		setHover(0);
	};
	return (
		<Container>
			<a
				href="https://github.com/AlexanderBraatz"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon
					className="fa-brands fa-square-github fa-4x"
					onMouseOver={() => handleMouseOver(1)}
					onMouseLeave={handleMouseLeave}
					hover={hover === 1}
				></Icon>
			</a>
			<a
				href="https://www.linkedin.com/in/alexander-braatz-90436a109/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon
					className="fa-brands fa-linkedin fa-4x"
					onMouseOver={() => handleMouseOver(2)}
					onMouseLeave={handleMouseLeave}
					hover={hover === 2}
				></Icon>
			</a>
			<a href="#EmailForm">
				<Icon
					className="fa-solid fa-envelope fa-4x"
					onMouseOver={() => handleMouseOver(3)}
					onMouseLeave={handleMouseLeave}
					hover={hover === 3}
				></Icon>
			</a>
		</Container>
	);
};
export default LinkIcons;

const Container = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: space-between;
	width: 15rem;
`;
const Icon = styled.i`
	color: ${props =>
		props.hover ? props.theme.light.primary : props.theme.light.accent};
	transition: color 0.5s ease;
`;
