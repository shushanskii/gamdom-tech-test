import styled from 'styled-components'
import { spacing } from '../../styles'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: ${spacing['5']};
    gap: ${spacing['5']}
`
