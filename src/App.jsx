import React, { Component } from 'react'

 class App extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
  render() {
     const onInc=()=>{
this.setState({count:this.state.count+1})
     }
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={onInc}>{this.props.title}</button>

        
      </div>
    )
  }
}
export default App