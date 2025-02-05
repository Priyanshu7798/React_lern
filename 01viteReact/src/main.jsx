  import React,{ StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import App from './App.jsx';
  import Comp from './New.jsx';

  // Runs in the code
  const objElem = (
    <a href="https://leetcode.com/problemset/" target="_blank">
      Click to visit Leetcode
    </a>
  );

  // Another way to write an element
  const reactElem = React.createElement(
    'a',
    {
      href: 'https://leetcode.com/problemset/',
      target: '_blank'
    },
    'Click me to visit Leetcode'
  );

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
      <Comp />
    </StrictMode>
  );
