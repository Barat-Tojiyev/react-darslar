import React, { Component } from 'react'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
   user:true 
    }
  }
  render() {      
    return (
      <div>
        {
          this.state.user ?(
     <div>
        <button onClick={()=>this.setState({user:!this.state.user})}>Login</button>
        <input type="text" placeholder='Login' />
        <input type="password" placeholder='Password' />        
      </div> ):
          (<div>
            <button onClick={()=>this.setState({user:!this.state.user})}>Register</button>
            <input type="text" placeholder='LastName'/>
            <input type="text" placeholder='Surname'/>
            <input type="number" placeholder='Age'/>          
          </div>       
          )
        }    
     
      </div>
    )
  }
}
