import { createGlobalStyle } from 'styled-components'
import  { font, FontSize, FontWeight, LineHeight } from 'styles'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        ${font(FontSize.base, FontWeight.normal, LineHeight.leadingNormal)};
    }
`

export default GlobalStyle
