import './App.scss';
import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="container-fluid App">
      <div className='row header'>
        <div className='col-md-6 header__button'><button className='btn btn-primary'>Primary</button></div>
        <div className='col-md-6 header__button'><button className='btn btn-warning'>Warning</button></div>
      </div>
    </div>
  );
}

export default App;