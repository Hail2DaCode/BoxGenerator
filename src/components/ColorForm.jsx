import React, { useState } from 'react';

const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const handleSubmit = (e) => { e.preventDefault(); props.onNewColor(color); setColor("")}

    return (
        <form onSubmit = { handleSubmit }>
            <label htmlFor="color">Color:</label>
            <input type = "text" name="color" placeholder="Please add a color" onChange={ (e) => setColor(e.target.value)} value={color}></input>
            <button type = "submit" value = "Create Color">Add</button>
        </form>
    );
};

export default ColorForm;