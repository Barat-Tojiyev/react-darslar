import React, { Component } from 'react'
import {data} from './Counter/data'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mode:data,
      search:'',
      salom:true     
    }
  }
  render() {


    return (
      <div>
         <button onClick={()=>this.setState({salom:!this.state.salom})}>Register</button>
         <button onClick={()=>this.setState({salom:!this.state.salom})}>Login</button>
        {
          this.state.salom ? (
<div>
          
        <input type="text" placeholder='register'  />
        <input type="text" placeholder='register'  />
        <input type="text" placeholder='register'  />

        </div>
          ):(
<div>
         
        <input type="text" placeholder='login'  />
        

        </div>
          )
        }
        
        

        
        

      </div>
    )
  }
}
