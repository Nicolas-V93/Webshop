import { useContext } from 'react';
import { CartContext } from '../store/cart-context';

import classes from './CartBadge.module.css';

function CartBadge() {
  const cartCtx = useContext(CartContext);
  const itemsInCart = cartCtx.items.reduce((acc, current) => acc + current.amount, 0);

  return <span className={classes['cart-badge']}>{itemsInCart}</span>;
}

export default CartBadge;
