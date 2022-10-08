import React, { Component } from 'react';
import { Container } from './Counter/AppStyle';
import {ThemePriveder,createGlobalStyle} from 'styled-components'
 
const darkMode=createGlobalStyle`
  
`
const theme={

}
class App extends Component {
    render() {
        return (            
              <ThemePriveder theme={theme}>
                <darkMode/>
                <Container bg="red"                   
                
                color='yellow'
                
                >
                    <Container.Title>Salom</Container.Title>
                    <Container.Btn>Login</Container.Btn>
                </Container>
                </ThemePriveder>
            
        );
    }
}

export default App;
