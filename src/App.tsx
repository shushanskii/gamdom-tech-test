import { Provider } from 'react-redux'

// Store
import { store } from 'store'

// Components
import Main from 'pages/Main'

// Styled
import GlobalStyle from 'styles/GlobalStyle'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main/>
    </Provider>
  )
}

export default App;
