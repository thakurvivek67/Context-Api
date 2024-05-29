import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../Styles/Cart.css';
import CartContext from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
const Cart = props => {
    const MenuCtx = useContext(CartContext);
    const [TotalAmount, SetTotalAmount] = useState(0);
    useEffect(() => {
        let total = 0;
        MenuCtx.FoodCart.forEach(item => {
            total += (item.price * item.quantity);
        });
        SetTotalAmount(total);
    }, [MenuCtx.FoodCart]);
    return ReactDOM.createPortal(
        <>
            <div className="CContainer">
                <div className="Cart-Box">
                    <div className="Cart-Array">
                        {
                            MenuCtx.FoodCart.map((item, index) => (
                                <div key={index} className="CartItem">
                                <img src={item.img} alt={item.name} width="50px" height="50px" style={{ "borderRadius": "10px", "margin" : "5px" }} />
                                    <p>{item.name}</p>
                                    <p>{item.price} /-</p>
                                    <p>{item.quantity}</p>
                                    <button className="BTN1 MIN" onClick={() => MenuCtx.RemoveFoodItems(item)}>
                                        <FontAwesomeIcon icon={faCartArrowDown} style={{ color: "#ffffff", }} />
                                    </button>
                                    <button className="BTN1 MAX" onClick={()=>MenuCtx.AddFoodItems(item)}>
                                        <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: "#ffffff", }} />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                    <div className="TotalAmount">
                        <p className="TA">Total:</p>
                        <p className="TA">{TotalAmount} /-</p>
                    </div>
                    <div className="Cart-Btns">
                        <button className="BTN CNCL" onClick={props.OnOffCart}>Cancel</button>
                        <button className="BTN ORDR" onClick={props.OnOrder}>Order</button>
                    </div>
                </div>
            </div>
        </>, document.getElementById("root1")
    );
}
export default Cart;