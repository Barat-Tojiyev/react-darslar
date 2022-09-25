import React, { Component } from 'react'
import './card.css'
import data from './data'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            subject:data,
            select:'id',
            user:'',
            editUser:''
        }
    }
  render() {    
    let onSearch=(e)=>{
 const{value}=e.target
 const res =data.filter((item)=>item[this.state.select].toString().toLowerCase().includes(value.toLowerCase()))
 this.setState({subject:res})
    }
    let onSelect=(e)=>{
        const {value}=e.target
        this.setState({
            select:value
        })
    }
    const onChangeAdd=(e)=>{
        const{value}=e.target
        this.setState({
            user:value
        })
    }
 
    const onAdd=()=>{
const newUser={
    id:this.state.subject.length+1,
    name:this.state.user
}
this.setState({ subject:[...this.state.subject,newUser],
 user:''  })
 }

 const onDelete=(id)=>{

  const res=this.state.subject.filter((value)=> value.id !== id)
  this.setState({
    subject:res
 })
 }
 const onEdit =(name)=>{
   this.setState({
    editUser:name
   })
 }
 console.log(this.state.editUser);
 
    return (
      <div
      className='card'>
        <div className="box">
            <div className='navbar'>
            <h1 className='brand'>Paxtachi IT Center</h1>
            <p>{this.state.subject.length} posts, like 0</p>
            </div>
            <div className="search">
                <input type="text" onChange={onSearch} placeholder='Search...' />
                <select onChange={onSelect}>
                    <option>id</option>
                    <option>name</option>
                </select>
            </div>
            <div className="search">
                <input value={this.state.user} type="text" onChange={onChangeAdd} placeholder='Add user ...' />
                <button onClick={onAdd} >Add</button>
            </div>
            <div className="table_box">
                <table>
                    <tbody >
                        { this.state.subject.length ?(
                            this.state.subject.map(({id,name})=>{
                            return    <tr key={id}>
                                    <td className='id'>{id}</td>
                                    <td className='name'>{
                                    this.state.editUser === name ? <input value={this.state.editUser} className='editInput'  /> : name

                                    }</td>
                                    <td>
                                     {this.state.editUser === name ?  <button className='save'>Save</button> :  <button onClick={()=>  onEdit(name)} className='edit'>Edit</button>}   
                                       
                                        </td>
                                    <td><button onClick={()=>onDelete(id)} className='delete'>Delete</button></td>
                                </tr>
                            })) :<h1>No Data</h1>
                        }
                    </tbody></table>
                    </div>   </div>   
      </div>      
    ) }}
 

