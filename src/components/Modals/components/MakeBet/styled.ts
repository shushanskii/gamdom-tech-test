import styled from 'styled-components'

import { colors, container, font, FontSize, FontWeight, LineHeight, rounded, spacing } from 'styles'

export const Container = styled.div`
    display: flex;
    width: ${container['sm']};
    padding: ${spacing['0']};
    flex-direction: column;
    align-items: flex-start;
    gap: ${spacing['0']};
    background: ${colors.white};
    border-radius: ${rounded['lg']};
    border: 1px solid ${colors.gray[200]};
`

export const Title = styled.div`
    display: flex;
    padding: ${spacing['6']};
    align-items: center;
    gap: ${spacing['6']};
    align-self: stretch;
    ${font(FontSize.lg, FontWeight.semibold, LineHeight.leadingTight)}
`

export const Bottom = styled.div`
    display: flex;
    padding: ${spacing['6']};
    align-items: center;
    gap: ${spacing['6']};
    align-self: stretch;
`
