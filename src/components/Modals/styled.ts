import styled from 'styled-components'
import { rgba } from 'polished'
import { FloatingOverlay } from '@floating-ui/react'

import { colors } from 'styles'

export const Overlay = styled(FloatingOverlay)`
  background: ${rgba(colors.black, 0.9)};
  display: grid;
  place-items: center;
  z-index: 20;
`
