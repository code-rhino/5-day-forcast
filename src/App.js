import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}
fetch ('api.openweathermap.org/data/2.5/forecast?q=London,us&appid=03391c8ecd63478e020be2d29b18101e')
.then(response => response.json())
.then(data => console.log(data))
export default App;
