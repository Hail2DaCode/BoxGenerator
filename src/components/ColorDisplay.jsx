// import React, { useState } from 'react';

import { type } from "@testing-library/user-event/dist/type";

const ColorDisplay = (props) => {
    // let colorlist = props.displayColors;
    // console.log(props.displayColors[0]);
    // console.log(type(props.displayColors));
    return (
        <div className="container">
        {
            props.displayColors.map( (item,index) => 
                <div className="box" style={{backgroundColor: item}} key={index}></div> )

            
        }
            
            
        </div>
            
        
    )
        
}

export default ColorDisplay;