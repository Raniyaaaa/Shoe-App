import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import classes from "./Cart.module.css"

const Cart=(props)=>{
    let grandTotal = props.cartItems.reduce((total, item) => {
        const itemTotal = (item.Lq * item.Price) + (item.Mq * item.Price) + (item.Sq * item.Price);
        return total + itemTotal;
    }, 0);

    const FullCart=(<ul className={classes["cart-items"]}>
        {props.cartItems.map((item)=>(
            <li className={classes.list} key={item.id}>
                {item.Name} 
                <div>{ item.Lq>0&&`${item.Lq}L`}</div>
                <div>{ item.Mq>0&&`${item.Mq}M`}</div>
                <div>{ item.Sq>0&&`${item.Sq}S`}</div> 
                
                { (item.Lq+item.Mq+item.Sq)*item.Price}
                
            </li>
        ))}
    </ul>)
    return (
        <Modal onCloseCart={props.onCloseCart}>
            {FullCart}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{grandTotal.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <Button className={classes.button} label="PlaceOrder"/>
                <Button className={classes["button--alt"]} onClick={props.onCloseCart} label="Cancel"/>
            </div>
        </Modal>
        
    )
}

export default Cart;