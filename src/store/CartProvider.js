import React , {useReducer} from 'react'
import CartContex from './cart-contex';

const defaultCartState = {
    items : [],
    totalAmount : 0
};

const cartReducer = (state , action) => {
    if(action.type === 'ADD') {
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return  {
            items : updateItems,
            totalAmount : updateTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState , dispatchCartAction] = useReducer(cartReducer , defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type : 'ADD' , item : item});
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type : 'REMOVE' , id : id});

    };

    const createContex = {
        item : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem :addItemToCartHandler,
        removeItem :removeItemFromCartHandler
    }

  return (
    <CartContex.Provider value = {createContex}>

        {props.children}

    </CartContex.Provider>
  )
}


export default CartProvider;