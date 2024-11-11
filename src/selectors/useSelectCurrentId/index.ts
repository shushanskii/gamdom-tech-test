import { useSelector } from 'react-redux'

// Types
import { RootState } from 'store'

function useSelectCurrentId() {
  return  useSelector((state: RootState) => state.app.currentId)
}

export default useSelectCurrentId;
