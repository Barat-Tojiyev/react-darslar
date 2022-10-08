import React,{useState} from "react";

const Navbar =({title})=>{

    
    const [state,setState]=useState(0)

const onInc=()=>{
    

        setState(state+1)
    
}
let son=0
const onSave=()=>{
  son=son+1
  console.log('qushish',son)
}
    return(
        <>
        <h1>{state}</h1>
        <button onClick={onInc}>{title}</button>
        <h1>{son}</h1>
        <button onClick={onSave}>qushish</button>
      
        </>
    )
}
export default Navbar