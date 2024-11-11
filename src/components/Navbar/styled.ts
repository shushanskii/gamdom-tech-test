import styled from 'styled-components'
import Select from 'react-select'
// Import StateManagedSelect from 'react-select/dist/declarations/src/stateManager'

import { spacing } from 'styles'

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: ${spacing['6']};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${spacing['0']};
`

export const Filter = styled<typeof Select>(Select)`
    width: 200px;
`
