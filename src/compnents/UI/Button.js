import React from "react"
import classes from "./Button.module.css"
const Button=(props)=>{
 return(
    <button className={classes.button} onClick={props.onClick} type={props.type || "button"}>
        {props.label}
    </button>
 )
}

export default Button;