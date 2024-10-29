import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css"
const Header=(props)=>{
  return(
    <div>
        <header className={classes.header}>
            <h1>SHOE...</h1>
            <HeaderCartButton cartItems={props.cartItems} onClick={props.onShowCart}/>
        </header>
    </div>
  )
}

export default Header;