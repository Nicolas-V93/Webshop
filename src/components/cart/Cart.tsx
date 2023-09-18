import { useContext } from 'react';
import { CartContext } from '../store/cart-context';
import Modal from '../ui/Modal';
import BasketItem from './BasketItem';
import CartItem from '../../models/cartItem';

type Props = {
  onDismiss: () => void;
};

function Cart({ onDismiss }: Props) {
  const cartCtx = useContext(CartContext);
  const cartHasItems = cartCtx.items.length > 0;

  const handleOnAdd = (item: CartItem) => {
    cartCtx.addToCart({ ...item, amount: 1 });
  };

  const handleOnRemove = (id: number) => {
    cartCtx.removeFromCart(id);
  };

  return (
    <Modal onClick={onDismiss}>
      {cartHasItems ? (
        <>
          <ul>
            {cartCtx.items.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                onRemove={() => handleOnRemove(item.id)}
                onAdd={() => handleOnAdd(item)}
              />
            ))}
          </ul>
          <p>Cart Total: &euro; {cartCtx.total.toFixed(2)}</p>
        </>
      ) : (
        <p>No items in cart</p>
      )}
    </Modal>
  );
}

export default Cart;
