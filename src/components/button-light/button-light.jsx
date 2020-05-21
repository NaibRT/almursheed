import React from "react";
import "../button-light/button.light.css";

const ButtonLight=(props)=>{

    return(
        <button  className="light-btn">{props.name}</button>
    )
}

export default ButtonLight;