import { useSelector } from 'react-redux'

// Types
import { RootState } from 'store'

function useSelectModalIsOpen() {
  return  useSelector((state: RootState) => state.app.modalIsOpen)
}

export default useSelectModalIsOpen;
