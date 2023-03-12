import React, { useState } from 'react';

const ColorForm = (props) => {
    const [box, setBox] = useState({color: "blueviolet", length: 80});
    const handleSubmit = (e) => { e.preventDefault(); props.onNewBox(box); setBox({color: "", length: 80})}

    return (
        <form onSubmit = { handleSubmit }>
            <label htmlFor="color">Color:</label>
            <input type = "text" name="color" placeholder="Please add a color" onChange={ (e) => setBox({color:e.target.value, length: box.length})} value={ box.color } ></input>
            <label htmlFor="length">Length:</label>
            <input type = "number" name="length" placeholder="Please add a length" onChange={ (e) => setBox({color: box.color, length:e.target.value})} value={box.length} ></input>
            <button type = "submit" value = "Create Color">Add</button>
        </form>
    );
};

export default ColorForm;