import React, { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = props => {
    const [FoodCart, SetFoodCart] = useState([]);
    const AddFoodItems = newItem => {
        console.log(newItem);
        const ExistingItemIndex = FoodCart.findIndex((item) => item.id === newItem.id);
        if(ExistingItemIndex !== -1){
            // If item exists in the cart, update its quantity
            const UpdateCart = [...FoodCart];
            UpdateCart[ExistingItemIndex].quantity += 1;
            SetFoodCart(UpdateCart);
        } else {
            // If item doesn't exist in the cart, add it
            const UpdateCart = [...FoodCart, {...newItem, quantity: 1}];
            SetFoodCart(UpdateCart);
        }
    }

    const RemoveFoodItems = (deletingItem) => {
         // Find index of deletingItem in cart
         const deletingItemIndex = FoodCart.findIndex((item) => item.id === deletingItem.id);
         // If quantity of deletingItem is 1, remove it from cart
        if (deletingItem.quantity === 1) {
            const updatedCart = FoodCart.filter((item) => item.id !== deletingItem.id);
            SetFoodCart(updatedCart);
        } else {
            // Decrease quantity by 1
            const updatedItem = {
                ...deletingItem,
                quantity: deletingItem.quantity - 1,
            };
            const updatedCart = [...FoodCart];
            updatedCart[deletingItemIndex] = updatedItem;
            SetFoodCart(updatedCart);
        }
    }

    const OBJ = {
        FoodCart,
        AddFoodItems,
        RemoveFoodItems
    }
    return (
        <CartContext.Provider value={OBJ}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartProvider;