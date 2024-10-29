import { useEffect,useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"


const HeaderCartButton =(props)=>{

    const [total, setTotal] = useState(0);
    console.log("hooo")
    console.log(props.cartItems)
    console.log("hooo")
    useEffect(() => {
        const updatedTotal = (props.cartItems || []).reduce((sum, item) => {
            return sum + (item.Lq || 0) + (item.Mq || 0) + (item.Sq || 0);
        }, 0);
        setTotal(updatedTotal);
    }, [props.cartItems]);

    return (
        <button className={classes.button} onClick={props.onClick}>
        <div className={classes.icon}>
            <CartIcon/>
        </div>
        <div>
            Your Cart
        </div>
        <div className={classes.badge}>
        {total}
        </div>
    </button>
    )
}


export default HeaderCartButton;