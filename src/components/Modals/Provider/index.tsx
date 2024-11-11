import { PropsWithChildren, createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import useModals from 'components/Modals/useModals'
import { RootState } from 'store'
import { setModalIsOpen } from 'store/app'

type ContextType = ReturnType<typeof useModals> | null

export const ModalsContext = createContext<ContextType>(null)

function ModalsProvider({ children, ...options }: PropsWithChildren<unknown>) {
  const dispatch = useDispatch()

  const modalIsOpen = useSelector((state: RootState) => state.app.modalIsOpen)

  const onOpenChange = () => dispatch(setModalIsOpen(!modalIsOpen))

  const modals = useModals({ ...options, open: modalIsOpen, onOpenChange })
  return (
    <ModalsContext.Provider value={modals}>{children}</ModalsContext.Provider>
  )
}

export default ModalsProvider
