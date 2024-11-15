import styled, { css } from 'styled-components'
import {
  colors,
  font,
  FontSize,
  FontWeight,
  LineHeight,
  rounded,
  spacing,
} from 'styles'

export const Container = styled.div<{ $disabled?: boolean }>`
    display: inline-flex;
    padding: ${spacing['3/5']} ${spacing['6']};
    justify-content: center;
    align-items: center;
    gap: ${spacing['2']};
    border-radius: ${rounded.lg};
    background: ${colors.primary[700]};
    color: ${colors.white};
    cursor: pointer;
    ${font(FontSize.base, FontWeight.medium, LineHeight.leadingTight)}
    
    ${({ $disabled }) => $disabled && css`
        pointer-events: none;
        color: ${colors.gray[800]};
        background: ${colors.gray[200]};
    `}
`
