import './App.css';
import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';



function App() {
  const [boxes, setBoxes] = useState([]);

  const youvegotBox = ( newBox ) => { setBoxes([...boxes,  newBox])};
  console.log(boxes);
  return (
    <div className="App">
      <ColorForm onNewBox = { youvegotBox } />
      <ColorDisplay displayColors = { boxes }/>
    </div>
  );
}

export default App;
