import styled,{css} from "styled-components";

const center=css`
display:flex;
justify-content: center;
align-items: center;
`
const container=css`
 width: 90%;
margin: 0 auto;
`


const Container =styled.div`   
    background: red;
    padding: 30px;
    color: white;
    ${center}
    ${container}

`
const Description=styled.p`
     color: white;
     background:black; 
     padding: 30px;
     ${center}
     ${container}
   `


const Button =styled.button`
    padding: 20px 15px;
    border: none;
    background:  ${(props)=>props.background ? props.background:'green'} ;
    color: white;
    font-size: ${(props)=>props.size ?props.size:'14px'};
    width:${(props)=>props.w ? props.w : '100px'};
    margin: 20px;
  


`



export {Container,Description,Button}