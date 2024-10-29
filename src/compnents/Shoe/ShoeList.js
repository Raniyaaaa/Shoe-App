import React from "react";
import Button from "../UI/Button";

const ShoeList=(props)=>{
    const buyHandler=(e,shoe,size)=>{
        e.preventDefault()
        props.onBuy(shoe,size)
    }
    return (
        <ul>
          {props.shoes.map((shoe) => (
            <li key={shoe.id}>
              {shoe.Name} {shoe.Description} {shoe.Price}  
              {shoe.LQuantity > 0 && (
                <Button  onClick={(e)=>buyHandler(e,shoe,"L")} label={`Buy Large (${shoe.LQuantity})`} />
              )}
              {shoe.MQuantity > 0 && (
                <Button  onClick={(e)=>buyHandler(e,shoe,"M")} label={`Buy Medium (${shoe.MQuantity})`} />
              )}
              {shoe.SQuantity > 0 && (
                <Button onClick={(e)=>buyHandler(e,shoe,"S")} label={`Buy Small (${shoe.SQuantity})`} />
              )}
            </li>
          ))}
        </ul>
      );
}

export default ShoeList;