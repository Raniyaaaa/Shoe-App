import React ,{useState} from "react"
import Cart from "./compnents/Cart/Cart";
import Header from "./compnents/Layout/Header";
import ShoeForm from "./compnents/Shoe/ShoeForm";
import ShoeList from "./compnents/Shoe/ShoeList";

const App=()=>{
  const [cartIsVisible,setCartIsVisible]=useState(false);
  const [shoes,setShoeList]=useState([])
  const [cart, setCart] = useState([]);

  
  const showCartHandler=()=>{
    setCartIsVisible(true);
  }
  const hideCartHandler=()=>{
    setCartIsVisible(false)
  }

  const AddShoeHandler = (eName, eDesc, ePrice, eL, eM, eS) => {
    if(eL!==0||eM!==0||eS!==0){
      setShoeList((prevItems) => [
        ...prevItems,
        {
          id: Math.random().toString(),
          Name: eName,
          Description: eDesc,
          Price: ePrice,
          LQuantity: eL,
          MQuantity: eM,
          SQuantity: eS,
        }
      ]);
    }  
  };

  const buyItemHandler=(shoe,size)=>{
    setCart((prevCart) => {
      const existingCartItemIndex = prevCart.findIndex((item) => item.id === shoe.id);
      let updatedCart;
  
      if (existingCartItemIndex !== -1) {

        updatedCart = [...prevCart];
        const existingCartItem = updatedCart[existingCartItemIndex];

        if (size === 'L') {
          if (shoe.LQuantity > 0) {
            updatedCart[existingCartItemIndex] = { ...existingCartItem, Lq: (existingCartItem.Lq || 0) + 1 };
            setShoeList((prevShoes) => prevShoes.map(s => s.id === shoe.id ? { ...s, LQuantity: s.LQuantity - 1 } : s));
          }
        } else if (size === 'M') {
          if (shoe.MQuantity > 0) {
            updatedCart[existingCartItemIndex] = { ...existingCartItem, Mq: (existingCartItem.Mq || 0) + 1 };
            setShoeList((prevShoes) => prevShoes.map(s => s.id === shoe.id ? { ...s, MQuantity: s.MQuantity - 1 } : s));
          }
        } else if (size === 'S') {
          if (shoe.SQuantity > 0) {
            updatedCart[existingCartItemIndex] = { ...existingCartItem, Sq: (existingCartItem.Sq || 0) + 1 };
            setShoeList((prevShoes) => prevShoes.map(s => s.id === shoe.id ? { ...s, SQuantity: s.SQuantity - 1 } : s));
          }
        }
      } else {
        updatedCart = [
          ...prevCart,
          {
            ...shoe,
            Lq: size === 'L' ? 1 : 0,
            Mq: size === 'M' ? 1 : 0,
            Sq: size === 'S' ? 1 : 0
          },
        ];
      
      if (size === 'L') {
        setShoeList((prevShoes) => prevShoes.map(s => s.id === shoe.id ? { ...s, LQuantity: s.LQuantity - 1 } : s));
      } else if (size === 'M') {
        setShoeList((prevShoes) => prevShoes.map(s => s.id === shoe.id ? { ...s, MQuantity: s.MQuantity - 1 } : s));
      } else if (size === 'S') {
        setShoeList((prevShoes) => prevShoes.map(s => s.id === shoe.id ? { ...s, SQuantity: s.SQuantity - 1 } : s));
      }
    }
      return updatedCart;
    });
  };

  return(
    <>
      {cartIsVisible&&<Cart onCloseCart={hideCartHandler} cartItems={cart}></Cart>}
      <Header cartItems={cart} onShowCart={showCartHandler}></Header>
      <main>
        <ShoeForm onAddShoe={AddShoeHandler}/>
        <ShoeList shoes={shoes} onBuy={buyItemHandler}/>
      </main>
    </>
  )
}

export default App;