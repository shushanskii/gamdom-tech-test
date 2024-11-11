import { forwardRef, HTMLProps } from 'react'
import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react'

// Components
import MakeBet from './components/MakeBet'

// Hooks
import useModalsContext from 'components/Modals/useModalsContext'

// Styled
import { Overlay } from './styled'

const Modals = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function _Modals(props, propRef) {
    const { context, getFloatingProps, refs } = useModalsContext()
    const ref = useMergeRefs([refs.setFloating, propRef])

    if (!context.open) {
      return null
    }

    return (
      <FloatingPortal>
        <Overlay lockScroll={true}>
          <FloatingFocusManager context={context}>
            {(() => (
              <MakeBet ref={ref} {...getFloatingProps(props)} />
            ))()}
          </FloatingFocusManager>
        </Overlay>
      </FloatingPortal>
    )
  },
)

export default Modals
