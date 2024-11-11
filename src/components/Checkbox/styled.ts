import styled, { css } from 'styled-components'

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
    display: inline-block;
    height: 20px;
    width: 20px;
    background: #fff;
    border: 2px #ddd solid;
    margin-right: 4px;
    
    ${({ $checked }) => $checked && css`
        border-color: purple;
        background: purple;
    `}
`
