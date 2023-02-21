import React , {useContext} from 'react'
import CartContex from '../../store/cart-contex';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContex);
    
    const numberOfCartItems = cartCtx.item.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0);

  return (
    <button className={classes.button} onClick = {props.onClick}>

       <span className={classes.icon}>
        <CartIcon/>
       </span>

       <span>
        Your Cart
       </span>

       <span className={classes.badge}>
        {numberOfCartItems}
       </span>
       
    </button>
  )
}

export default HeaderCartButton;