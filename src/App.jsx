import React, { Component } from "react";
import { Button, Container, Description } from "./Counter/data";

class App extends Component {
  render() {
    return (
      <div>
        <Container>This is style component</Container>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab id in
          ratione laborum. Aspernatur minus rem quam autem odio?
        </Description>
   
            <Button background="red" w='200px'>Send</Button> 
            <Button background="blue" w='300px' size='20px'>Send</Button> 
       
       
      </div>
    );
  }
}

export default App;
