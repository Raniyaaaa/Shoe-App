import React,{useState} from "react"
import classes from "./ShoeForm.module.css"
import Button from "../UI/Button";

const ShoeForm=(props)=>{
    const [shoeName, setShoeName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [lQuantity, setLQuantity] = useState(0);
    const [mQuantity, setMQuantity] = useState(0);
    const [sQuantity, setSQuantity] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddShoe(shoeName, description, price, lQuantity, mQuantity, sQuantity);

    setShoeName("");
    setDescription("");
    setPrice("");
    setLQuantity(0);
    setMQuantity(0);
    setSQuantity(0);
  };

    return(
        <form className={classes.shoeform} onSubmit={submitHandler}>
            <label htmlFor="showname">ShoeName </label>
            <input type="text" id="showname" value={shoeName} onChange={(e) => setShoeName(e.target.value)} required/>
            <label htmlFor="description">Description </label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            <label htmlFor="price">Price </label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)}  required/>
            <br></br>
            <br></br>
            Quantity Available
            <br></br>
            <br></br>
            <label htmlFor="Ltype">L </label>
            <input type="number" id="Ltype" value={lQuantity} onChange={(e) => setLQuantity(e.target.value)}/>
            <label htmlFor="Mtype">M </label>
            <input type="number" id="Mtype" value={mQuantity} onChange={(e) => setMQuantity(e.target.value)}/>
            <label htmlFor="Stype">S </label>
            <input type="number" id="Stype" value={sQuantity} onChange={(e) => setSQuantity(e.target.value)}/>
            <div>
                <Button type="submit" label="Add Product"/>
            </div>
        </form>
    )    
}

export default ShoeForm;