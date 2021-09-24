//_document.tsx 
import Document, { Html, Head, Main, NextScript } from 'next/document'
//import styled from 'styled-components'
import tw from 'twin.macro'

//const DocumentBody = styled.body`
//	margin: 0;	
//`

export default class MyDocument extends Document {
 render() {
    return (
      <Html>
        <Head />
        <body style={{ margin: '0px', padding: '0px' }} tw="antialiased bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
