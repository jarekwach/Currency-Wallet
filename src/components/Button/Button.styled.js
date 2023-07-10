import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 1rem 5rem;
	margin: 1rem;
	letter-spacing: 1.5px;
	border: none;
	border-radius: 10px;
	transition: all 0.3s;
	cursor: pointer;
	outline: none;
	box-shadow: var(--shadow);

	&:hover {
		background-color: #333;
		color: #fff;
	}

	&:active {
		transform: translateY(3px);
	}
`;

export { StyledButton };
