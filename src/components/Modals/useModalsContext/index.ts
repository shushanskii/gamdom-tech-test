import { useContext } from 'react'
import { ModalsContext } from 'components/Modals/Provider'

function useModalsContext() {
  const context = useContext(ModalsContext)

  if (context == null) {
    throw new Error('Modal components must be wrapped in <ModalsProvider />')
  }

  return context
}

export default useModalsContext
