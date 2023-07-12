import styled from 'styled-components';

const StyledTableRow = styled.tr`
	transition: all 0.3s;

	:not(:last-child) {
		border-bottom: 1px solid #ddd;
	}

	:hover {
		background-color: #ddd;
        
	}
`;

export { StyledTableRow };
