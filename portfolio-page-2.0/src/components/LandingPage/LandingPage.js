import React from 'react';
import styled from 'styled-components';
import HeadingHighlight from './HeadingHighlight';
const LandingPage = props => {
	return (
		<Wrapper>
			<Content>
				<HeadingWrapper>
					<HeadingSection>Hi,</HeadingSection>
					<HeadingSection>I`m</HeadingSection>
					<HeadingSection>Alexander</HeadingSection>
					<HeadingSection>|</HeadingSection>
					<HeadingHighlight value={'Web'} />
					<HeadingHighlight value={'Developer'} />
				</HeadingWrapper>
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
	padding: 1rem;
`;
const HeadingWrapper = styled.div`
	padding-top: 20vh;
	display: flex;
`;
const HeadingSection = styled.div`
	color: ${props => props.theme.light.primary};
	font-size: 6.5rem;
	margin-right: 1.6rem;
`;
