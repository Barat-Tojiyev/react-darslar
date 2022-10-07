import React, { Component } from 'react';

import { Container } from './Counter/AppStyle';
import Logo from './Counter/logo/Vector.png'


class Navbar extends Component {

    constructor(props){
        super(props)
        this.state={
            sign:true
        }
    }
    render() {

        const onClick=()=>{
            this.setState({sign:!this.state.sign})
        }
        console.log(this.state.sign)
        return (
            <div>
                <Container bg='white' color='#46A358'>
                    <div><img src={Logo} alt="#" /></div>
                    <Container.UL>
                    <Container.LI>Home</Container.LI>
                    <Container.LI>Page</Container.LI>                   
                    </Container.UL>
                  <Container.Btn onClick={onClick}>{this.state.sign ? 'White' :'Black'}</Container.Btn>
                </Container>
            </div>
        );
    }
}
export default Navbar;
