import React from 'react';
const CartContext = React.createContext({
    FoodCart: [],
    AddFoodItems: (item) => {},
    RemoveFoodItems: (item) => {},
    AddToMenu: (item) => {},
    MenuItems: []
});
export default CartContext;