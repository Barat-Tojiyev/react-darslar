import styled ,{css} from "styled-components";
 
const common =css`
 display: flex;
   justify-content: space-around;
   align-items: center;
   font-family: sans-serif;
`

const Padding =css`
   padding-top: ${({pt})=> pt&&pt};
   padding-bottom: ${({pb})=> pb &&pb};
   padding-left: ${({pl})=> pl&&pl};
   padding-right: ${({pr})=> pr &&pr};
`


export const Container=styled.div`   
   background: ${({bg})=> bg ? bg :'green'};
   color:${({color})=> color ? color :'white'};
   padding:20px 0;   
   margin-top: ${({mt})=> mt && mt};
   ${Padding}
   ${common}
`
Container.Title =styled.h1`
letter-spacing:5px`

Container.Btn=styled.button`
color: white;
border: none;
background: #46A358;
padding: 10px 20px;
${Padding}

:active{
    transform: scale(0.9);
}
`


Container.UL=styled.ul`
display: flex;


`
Container.LI=styled.li`

font-size: 16px;
line-height: 19px;
color: #3D3D3D;
list-style: none;
margin-left: 10px;


`