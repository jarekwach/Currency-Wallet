import styled from 'styled-components';

const StyledTableHeader = styled.th`
	padding: 1.8rem 1rem;
	background-color: #3a3a3a;
	color: #fff;

	:first-child {
		border-top-left-radius: 10px;
	}

	:last-child {
		border-top-right-radius: 10px;
	}
`;

export { StyledTableHeader };
