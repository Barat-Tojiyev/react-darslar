import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
const tuplam=[
  {
    firstName:'Elshoda',
    lastName:'Bahodirova',
    age:14
  }  
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{
  tuplam.map((value)=>{
    return(
      <App title={value}/>
    )
        })}
  </React.StrictMode>
);

