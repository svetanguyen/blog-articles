import styled from 'styled-components'

export const Heading1 = styled.h1`
	font-size: calc(4.5rem + (8 * (100vw - 360px)) / 407);
	color: ${props => props.theme.textPrimary};
	margin-bottom: 1rem;
	font-weight: 700;
	line-height: 1.09091;
	@media screen and (min-width: 768px) {
		font-size: calc(5rem + (8 * (100vw - 768px)) / 671);
	}
`
export const Heading2 = styled.h2`
	font-size: calc(1.25rem + (4 * (100vw - 360px)) / 407);
	color: ${props => props.theme.textPrimary};
	margin-bottom: 1rem;
	font-weight: 400;
	line-height: 1.5;
	@media screen and (min-width: 768px) {
		font-size: calc(1.5rem + (8 * (100vw - 768px)) / 671);
	}
`