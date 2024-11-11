import { Provider } from 'react-redux'

// Store
import { store } from 'store'

// Components
import Main from 'pages/Main'

// Styled
import GlobalStyle from 'styles/GlobalStyle'
import ModalsProvider from './components/Modals/Provider'
import Modals from './components/Modals'
import Navbar from './components/Navbar'

function App() {
  return (
    <Provider store={store}>
      <ModalsProvider>
        <GlobalStyle />
        <Modals/>
        <Navbar />
        <Main />
      </ModalsProvider>
    </Provider>
  )
}

export default App
