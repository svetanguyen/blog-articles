import styled from "styled-components";

export const Link = styled.a`
	color: ${props => props.theme.textPrimary};
	font-size: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.125em;
	border-bottom: 0.125rem solid ${props => props.theme.textPrimary};
	font-weight: 600;
	padding-bottom: 0.25rem;
	text-decoration: none;
	line-height: 1;
	display: inline-block;
`;
