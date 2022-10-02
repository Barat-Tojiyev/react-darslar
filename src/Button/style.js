
import styled from "styled-components";


const getBtn=(type)=>{
    switch(type){
        case 'primary':
            return{
            
                background: 'red',
                color: 'white',
                border:'none',
                padding: '20px 30px',
                borderRadius: '10px'
            };
            case 'danger':
            return{
            
                background: 'blue',
                color: 'white',
                border:'none',
                padding: '20px 30px',
                borderRadius: '10px'
            };

        default:
            return{
                background:'green',
                color:'white'
            }

    }
}

export const Card =styled.button`

 width: ${(props)=>props.w ?props.w:'100px'};
 font-size:${(props)=>props.size ? props.size:'14px'};
 margin: 30px;
 ${({type})=>getBtn(type)}
`