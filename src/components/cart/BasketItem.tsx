import CartItem from '../../models/cartItem';
import classes from './BasketItem.module.css';

type Props = {
  item: CartItem;
  onRemove: () => void;
  onAdd: () => void;
};

function BasketItem({ item, onRemove, onAdd }: Props) {
  return (
    <li className={classes.item}>
      <div>
        <p className={classes['item-title']}>{item.title}</p>
        <p>&euro; {item.price.toFixed(2)}</p>
      </div>
      <div className={classes['item-actions']}>
        <button onClick={onRemove}>-</button>
        <span>{item.amount}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
}

export default BasketItem;
