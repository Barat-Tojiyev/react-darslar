import React, { Component } from 'react';
import { Container } from './Counter/AppStyle';

class App extends Component {
    render() {
        return (
            <div>
                <Container bg="red"                   
                
                color='yellow'
                
                >
                    <Container.Title>Salom</Container.Title>
                    <Container.Btn>Login</Container.Btn>
                </Container>
            </div>
        );
    }
}

export default App;
