import { useState } from 'react';

import './global.css';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import CartProvider from './components/store/cart-context';
import Navigation from './components/layout/Navigation';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Navigation onShowCart={() => setShowCart(!showCart)} />
      {showCart && <Cart onDismiss={() => setShowCart(false)} />}
      <Products />
    </CartProvider>
  );
}

export default App;
