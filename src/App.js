import React, { Component } from 'react'
import {person} from './data'
import './index.css'
import Navbar from './Navbar'
import Card from './Card'


export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            son:0,
            name:'React',
            surname:'JavaScript',
            people:person
        }
    }
  
  render() {
const getInput =(e)=>{    
   console.log(e.target.value);
   const{ value,name}=e.target;
   this.setState({[name]:value})
}

const onSearch=(e)=>{
  const {value}=e.target
  const res =person.filter(({name})=>name.toLowerCase().includes(value))
  this.setState({people:res})
}

    return (

      <div className='container mt-5'>
 
          <Navbar/>
          <Card/>        
        <div className='col-5'> 
        <h1>My name is {this.state.name}</h1>          
        <h1>My surname is {this.state.surname}</h1>    
            <input name='name' onChange={getInput} className='form-control' placeholder='Enter your name'/>   
            <input name='surname' onChange={getInput} className='form-control mt-3' placeholder='Enter your name'/>          
        </div>
      
        <div className='col-5 mt-5'>
          <input className='form-control' placeholder='Search...' onChange={onSearch}/>
        </div>
        <ul>
          {
            this.state.people.map((value)=>{
            return <>
             <li className='mt-5'>{value.id}</li> 
             <li className='nameText'>{value.name}</li>  
             <li>{value.class}</li> 
             <li>{value.status}</li> 
            </>      
            
            })
          }
        </ul>
       
      </div>
    )
  }
}
