import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';

const tuplam=[
  
  {id:1,name:'Abbos',age:18},
  {id:1,name:'Bekzod',age:18},
  {id:1,name:'Farrux',age:18},
  {id:1,name:'Shaxzod',age:18},


]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App title='Salom' data={tuplam}/>
<Navbar title='Xayr'data={tuplam} />
  </React.StrictMode>
);

