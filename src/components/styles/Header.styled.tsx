import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    color: ${props => props.theme.textPrimary};
    background: ${props => props.theme.headerBg};
    min-height: 56px;
    padding: 0 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`