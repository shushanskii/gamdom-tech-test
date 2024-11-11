import styled from 'styled-components'
import { rgba } from 'polished'
import { colors, font, FontSize, FontWeight, LineHeight, rounded, spacing, width } from 'styles'

export const Container = styled.div`
    width: ${width.sm};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${spacing['5']};
    border-radius: ${rounded.lg};
    border: 1px solid ${colors.gray['200']};
    background: ${colors.white};
    box-shadow: 0 4px 6px -1px ${rgba(colors.black, 0.1)}, 0 2px 4px -2px ${rgba(colors.black, 0.1)};
    flex-grow: 0;
    flex-shrink: 0;
`

export const Title = styled.div`
    width: 100%;
    color: ${colors.gray['900']};
    ${font(FontSize.xl, FontWeight.semibold, LineHeight.leadingTight)}
`

export const Bets = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Numbers = styled.div`
    color: ${colors.gray[900]};
    ${font(FontSize['3xl'], FontWeight.bold, LineHeight.leadingTight)}
`
