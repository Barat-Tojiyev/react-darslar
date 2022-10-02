import React from 'react';
import ReactDOM from 'react-dom/client';

import Button  from './Button/Button.jsx';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Button w='200px' size='20px'>Sign In</Button>
<Button w='300px' type='primary' size='25px'>Sign UP</Button>
<Button w='300px' type='danger' size='25px'>Sign UP</Button>
  </React.StrictMode>
);

