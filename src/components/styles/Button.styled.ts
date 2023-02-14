import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.theme.background};
    color: ${props => props.theme.textPrimary};
    font-size: 0.75rem;
    padding: 4px 0.75rem 0px 0.9rem;
    text-transform: uppercase;
    display: block;
    height: 34px;
    border-radius: 3rem;
    box-shadow: rgb(0 0 0 / 5%) 0px 2px 16px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.03);
    font-weight: 600;
`