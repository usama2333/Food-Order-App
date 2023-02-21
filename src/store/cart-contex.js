import React , {createContext} from "react";

const CartContex = createContext({
    item : [],
    totalAmount : 0,
    addItem : (item) => {},
    removeItem : (id) => {}
});

export default CartContex;