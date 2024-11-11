import styled, { css } from 'styled-components'
import { colors, spacing } from 'styles'

export const Container = styled.label`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

export const Input = styled.input`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

export const Box = styled.span<{ $checked: boolean }>`
    display: flex;
    width: 16px;
    height: 16px;
    padding: ${spacing['2/5']};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${spacing['2/5']};
    margin-right: ${spacing['2/5']};
    border: 1px solid ${colors.primary[700]};
    border-radius: 4px;
    
    ${({ $checked }) => $checked && css`
        background: ${colors.primary[700]};
    `}
`
