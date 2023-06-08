import React, { useState } from 'react';
import styled from 'styled-components';

const HeadingHighlight = props => {
	const [hover, setHover] = useState(false);

	const handleMouseOver = () => {
		setHover(true);
		setTimeout(() => {
			setHover(false);
		}, 200);
	};
	return (
		<HeadingContainer onMouseOver={handleMouseOver}>
			<Text>{props.value}</Text>
			<Highlight hover={hover} />
		</HeadingContainer>
	);
};

export default HeadingHighlight;

const HeadingContainer = styled.div`
	color: ${props => props.theme.light.primary};
	font-size: 6.5rem;
	margin-right: 1.6rem;
	position: relative;
`;

const Text = styled.div`
	font-size: 6.5rem;
	position: relative;
	z-index: 1;
`;
const Highlight = styled.div`
	background-color: ${props => props.theme.light.accent};
	width: ${props => (props.hover ? '25%' : '100%')};
	height: 2.4rem;
	position: absolute;
	top: 4.65rem;
	left: 0.36rem;
	z-index: 0;
	transition: width 0.2s ease;
`;
