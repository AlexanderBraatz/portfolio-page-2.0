import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled, { css } from 'styled-components';

const EmailForm = props => {
	const form = useRef();
	const [selected, setSelected] = useState({
		Name: false,
		Email: false,
		Text: false
	});

	const handleFocus = focused => {
		setSelected({ ...selected, [focused]: true });
		console.log(focused, selected);
	};
	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_45w02r2',
				'template_q1nzt2q',
				form.current,
				'bLntxgwfNxi6LqN3P'
			)
			.then(
				result => {
					console.log(result.text);
					console.log('message sent');
					e.target.reset();
					// add succes popup function here
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<StyledContactForm>
			<Form
				ref={form}
				onSubmit={sendEmail}
			>
				<NameLabel selected={selected.Name}>Name</NameLabel>
				<Input
					type="text"
					name="user_name"
					onFocus={() => handleFocus('Name')}
				/>
				<EmailLabel selected={selected.Email}>Email</EmailLabel>
				<Input
					type="email"
					name="user_email"
					onFocus={() => handleFocus('Email')}
				/>
				<TextLabel selected={selected.Text}>Message</TextLabel>
				<Textarea
					name="message"
					onFocus={() => handleFocus('Text')}
				/>
				<SubmitBorder>
					<Submit
						type="submit"
						value="Send Email"
					/>
				</SubmitBorder>
			</Form>
		</StyledContactForm>
	);
};

export default EmailForm;

const StyledContactForm = styled.div`
	width: 100%;
	height: 70rem;
	font-family: Muli, Helvetica, sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Form = styled.form`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	width: 40rem;
	font-size: 16px;
`;
const Label = styled.label`
	margin-top: 1rem;
	position: relative;
	padding-left: 1rem;
	/* top: 3.7rem; */
`;
const NameLabel = styled(Label)`
	top: ${props => (props.selected ? '0rem' : '3.7rem')};
	transition: 0.25s ease;
`;
const EmailLabel = styled(Label)`
	top: ${props => (props.selected ? '0rem' : '3.7rem')};
	transition: 0.25s ease;
`;
const TextLabel = styled(Label)`
	top: ${props => (props.selected ? '0rem' : '3.7rem')};
	transition: 0.25s ease;
`;

const fieldOutline = css`
	border: 1px solid black;
	box-shadow: 0.2rem 0.2rem black;
`;
const Input = styled.input`
	${fieldOutline}
	width: 100%;
	height: 3.5rem;
	padding: 0.7rem;
	outline: none;

	margin: 1px;
	&:focus {
		border: 2px solid rgba(0, 206, 158, 1);
		margin: 0;
	}
`;
const Submit = styled.input`
	&[type='submit'] {
		width: 100%;
		height: 3.5rem;
		cursor: pointer;
		background: ${props => props.theme.light.accent};
		color: ${props => props.theme.light.primary};
		border: none;
		position: relative;
		top: -0.5rem;
		left: -0.5rem;
		transition: 0.25s ease;

		margin: 0;
		height: 4rem;
		font-size: 1.5rem;
		font-weight: bold;

		&:hover {
			top: 0rem;
			left: 0rem;
		}
	}
`;

const Textarea = styled.textarea`
	${fieldOutline};
	max-width: 100%;
	min-width: 100%;
	width: 100%;
	max-height: 100px;
	min-height: 100px;
	padding: 7px;
	outline: none;

	margin: 1px;

	&:focus {
		border: 2px solid rgba(0, 206, 158, 1);
		margin: 0;
	}
`;

const SubmitBorder = styled.div`
	height: 4rem;
	margin-top: 4rem;
	margin-left: 1rem;
	width: 14rem;
	background: transparent;
	border: 0.2rem solid black;
	position: relative;
`;
