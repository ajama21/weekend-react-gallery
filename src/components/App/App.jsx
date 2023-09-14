import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"style={{ width: 'auto', height: '150px', marginRight: '20px'}}/>
        <img src="images/my_family.jpg"style={{ width: 'auto', height: '500px', borderRadius: '50%'}} />
      </div>
    );
}

export default App;
