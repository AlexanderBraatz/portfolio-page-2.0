import React from 'react';
import styled from 'styled-components';
import HeadingHighlight from './HeadingHighlight';
import LinkIcons from './LinkIcons';
const LandingPage = props => {
	return (
		<Wrapper>
			<Content>
				<HeadingWrapper>
					<HeadingSection>Hi,</HeadingSection>
					<HeadingSection>I`m</HeadingSection>
					<HeadingSection>Alexander</HeadingSection>
					{/* <HeadingSection>|</HeadingSection> */}
				</HeadingWrapper>
				<HeadingWrapper>
					<HeadingHighlight value={'Web'} />
					<HeadingHighlight value={'Developer'} />
				</HeadingWrapper>
				<LinkIcons />
			</Content>
		</Wrapper>
	);
};

export default LandingPage;

const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 8rem);
	background-color: ${props => props.theme.light.secondary};
	margin-top: 0;
`;

const Content = styled.div`
	max-width: 100%;
	margin: 0 auto;
	padding-left: 10rem;
	padding-top: 20vh;
`;
const HeadingWrapper = styled.div`
	display: flex;
`;
const HeadingSection = styled.div`
	color: ${props => props.theme.light.primary};
	font-size: 6.5rem;
	margin-right: 1.6rem;
`;
