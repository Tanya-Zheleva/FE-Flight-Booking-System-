
import React from 'react';
import logo from './logo.svg';
import './index.css';
import Title from './lib/title/title';

export const App =  (props) => {
    return (
      <div className="App">
        <img src={logo} />
        <Title />
      </div>
    );
  } 
  