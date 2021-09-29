import React from 'react';

import './index.css';

import Login from './Login';
import video from '../../assets/LibraryMove.mp4'

const index = () => {
    return (
        <div className="App">
        <video className='video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <header className='App-header' >
          <Login />
        </header>
      </div>
    );
};

export default index;
