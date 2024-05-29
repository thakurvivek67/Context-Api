import React, { useContext, useState, useEffect, useCallback } from "react";
import '../Styles/CartButton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../Context/CartContext";
const CartButton = props => {
    const MenuCtx = useContext(CartContext);
    const [cartQuantity, setCartQuantity] = useState(0);
     // Function to update cart quantity
     const updateCartQuantity = useCallback(() => {
        const totalQuantity = MenuCtx.FoodCart.reduce((total, item) => total + item.quantity, 0);
        setCartQuantity(totalQuantity);
    }, [MenuCtx.FoodCart]);

    // Update cart quantity when the context changes
    useEffect(() => {
        updateCartQuantity();
    }, [MenuCtx.FoodCart, updateCartQuantity]); // Listen for changes in cart context

    return (
        <>
            <button className="CRTBTN" onClick={props.Click}>
                <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: "#ffffff", }} />
                <p className="P">{cartQuantity}</p>
            </button>
        </>
    );
}
export default CartButton;