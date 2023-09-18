import CartBadge from '../cart/CartBadge';
import CartIcon from '../ui/CartIcon';
import classes from './Navigation.module.css';

type Props = {
  onShowCart: () => void;
};

function Navigation({ onShowCart }: Props) {
  const navbarClasses = `${classes['navbar-nav']} container`;

  return (
    <nav className={classes.navbar}>
      <div className={navbarClasses}>
        <a href='#'>Webshop</a>
        <button className={classes['navbar-cart']} type='button' onClick={onShowCart}>
          <CartIcon />
          <p>Cart</p>
          <CartBadge />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
