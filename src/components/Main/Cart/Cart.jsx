import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const cart = useSelector(state=>state.Carts);

    useEffect(() => {
      setItems(cart)

    }, [cart])
    
    let TotalCart=0;
    items.forEach(item => {
        TotalCart+=item.quantity * item.price;
    });

if (items.length!==0) {
  return (
    <table className="table">
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item, i) => {
                return (
                    <tr key={i} i={i}>
                        <td><button style={{ cursor: "pointer" }} onClick={()=>{
                        dispatch({
                            type: "DELETE_CART",
                            payload: i
                        })}}>X</button></td>
                        <td>{item.title}</td>
                        <td><img src={item.image} style={{ width: '100px', height: '80px' }} /></td>
                        <td>{item.price} $</td>
                        <td>
                            <button style={{ margin: '2px',cursor: "pointer" }} onClick={() => {
                            dispatch({
                                type: "DECREASE_QUANTITY",
                                payload: i
                            })}}>-</button>
                            <span>{item.quantity}</span>
                            <button style={{ margin: '2px', cursor: "pointer" }} onClick={() =>{
                            dispatch({
                                type: "INCREASE_QUANTITY",
                                payload: i
                            })}}>+</button>
                        </td>
                        <td>{item.price * item.quantity} $</td>
                    </tr>
                )
            })   }
            <tr>
                <td colSpan="5">Total: </td>
                <td>{Number(TotalCart)} $</td>
            </tr>
        </tbody>

    </table>
  )
}
}

export default Cart