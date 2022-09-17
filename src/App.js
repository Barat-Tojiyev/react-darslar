import React, { Component } from 'react'
export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            son:0,
            name:'React'
        }
    }
  render() {\
const plus =()=>{
    this.setState({son:this.state.son+1})
}
const minus =()=>{
    this.setState({son:this.state.son-1})}

const getInput =(e)=>{    
    this.setState({name:e.target.value})
}
    return (
      <div className='container mt-5'>
        <div className='text-center'>

        <h1>Hello, {this.state.son}</h1>
        <button onClick={minus} className='btn btn-success' >-</button>
        <button onClick={plus} className='btn btn-success ms-5'>+</button>
        </div>
        <div className='col-5'> 
        <h1>Hello, {this.state.name}</h1>          
            <input onChange={getInput} className='form-control' placeholder='Enter your name'/>          
        </div>
      </div>
    )
  }
}
