import React from "react";



class App extends React.Component{
    render(){
        return(
            <>
               <h1 className="text-danger" >Ismi:{this.props.title.firstName}, 
              Familyasi: {this.props.title.lastName} ,Yoshi:{this.props.title.age}</h1>
            </>
        )
    }
}

export default App