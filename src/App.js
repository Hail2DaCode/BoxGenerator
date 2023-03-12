import './App.css';
import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';



function App() {
  const [colors, setColors] = useState([]);

  const youvegotColor = ( newColor ) => { setColors([...colors,  newColor])};
  console.log(colors);
  return (
    <div className="App">
      <ColorForm onNewColor = { youvegotColor } />
      <ColorDisplay displayColors = { colors }/>
    </div>
  );
}

export default App;
