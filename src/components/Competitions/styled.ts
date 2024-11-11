import styled from 'styled-components'
import { spacing } from 'styles'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: ${spacing['5']};
    overflow: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: ${spacing['5']};
`
