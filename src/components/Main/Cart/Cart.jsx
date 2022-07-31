import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state=>state.Carts);

    let TotalCart=0;
    items.forEach(item => {
        TotalCart+=item.quantity * item.price;
    });

    function TotalPrice(price,quantity){
        return Number(price * quantity).toLocaleString('en-US');
    }

  return (
      <div className="row">
          <div className="col-md-12">
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
                      {
                          items.map((item, i) => {
                              return (
                                  <tr key={i} i={i}>
                                      <td><i style={{cursor: "pointer"}} className="badge badge-danger" onClick={() =>{
                                        dispatch({
                                            type: "DELETE_CART",
                                            payload: i
                                        })
                                      }}>X</i></td>
                                      <td>{item.name}</td>
                                      <td><img src={item.image} style={{ width: '100px', height: '80px' }} /></td>
                                      <td>{item.price} $</td>
                                      <td>
                                          <span  className="btn btn-primary" style={{ margin: '2px',cursor: "pointer" }} onClick={() => {
                                            dispatch({
                                                type: "DECREASE_QUANTITY",
                                                payload: i
                                            })
                                          }}>-</span>
                                          <span className="btn btn-info">{item.quantity}</span>
                                          <span className="btn btn-primary" style={{ margin: '2px', cursor: "pointer" }} onClick={() =>{
                                            dispatch({
                                                type: "INCREASE_QUANTITY",
                                                payload: i
                                            })
                                          }}>+</span>
                                      </td>
                                      <td>{TotalPrice(item.price, item.quantity)} $</td>
                                  </tr>
                              )
                          })

                      }
                      <tr>
                          <td colSpan="5">Total Carts</td>
                          <td>{Number(TotalCart)} $</td>
                      </tr>
                  </tbody>

              </table>
          </div>
      </div>
  )
}

export default Cart