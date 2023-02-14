import styled from 'styled-components'

export const Paragraph = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.textPrimary};
    font-weight: 400;
    line-height: 1.55556;
    margin-bottom: 2rem;
    @media (min-width: 1440px) {
        font-size: calc(1rem + (2 * (100vw - 1440px)) / 1119);
    }
`

export const ParagraphLg = styled(Paragraph)`
@media (min-width: 1440px) {
    font-size: calc(1.5rem + (8 * (100vw - 1440px)) / 1119);
}
`