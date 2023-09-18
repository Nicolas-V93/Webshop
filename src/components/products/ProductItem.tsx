import { useContext } from 'react';
import { CartContext } from '../store/cart-context';
import Product from '../../models/product';
import CartItem from '../../models/cartItem';
import Button from '../ui/Button';
import ReactStars from 'react-stars';

import classes from './ProductItem.module.css';

type Props = {
  item: Product;
};

function ProductItem({ item }: Props) {
  const cartCtx = useContext(CartContext);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      amount: 1,
    };

    cartCtx.addToCart(cartItem);
  };

  return (
    <li className={classes.card}>
      <div className={classes['card-image']}>
        <img src={item.image} alt={item.title} />
        <div className={classes.overlay}></div>
      </div>
      <div className={classes['card-content']}>
        <p className={classes['card-title']}>{item.title}</p>
        <p>&euro; {item.price.toFixed(2)}</p>
        <div className={classes['card-rating']}>
          <ReactStars count={5} value={item.rating.rate} edit={false} color2={'#22a125'} size={20} />
          <span>({item.rating.count})</span>
        </div>
        <div className={classes['card-button']}>
          <Button onClick={handleAddToCart} type='button'>
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
