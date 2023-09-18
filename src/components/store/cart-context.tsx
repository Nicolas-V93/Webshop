import { createContext, useState, ReactNode, useEffect } from 'react';
import CartItem from '../../models/cartItem';

//#region Creating the CartContext

type CartContextObj = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  total: number;
};

const defaultCartValue: CartContextObj = {
  items: [],
  addToCart: (_item) => {},
  removeFromCart: (_id) => {},
  total: 0,
};

export const CartContext = createContext<CartContextObj>(defaultCartValue);

//#endregion

//#region Providing the CartContext

type Props = {
  children?: ReactNode;
};

function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const cartTotal = cartItems.reduce((acc, current) => acc + current.price * current.amount, 0);

  useEffect(() => {
    const itemsString = localStorage.getItem('cart');
    if (itemsString !== null) {
      const items: CartItem[] = JSON.parse(itemsString);
      setCartItems(items);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      const items = JSON.stringify(cartItems);
      localStorage.setItem('cart', items);
    }
  }, [cartItems, isInitialized]);

  const handleAddToCart = (newItem: CartItem) => {
    const foundProductIndex = cartItems.findIndex((item) => item.id === newItem.id);

    if (foundProductIndex === -1) {
      setCartItems((prevState) => {
        return [...prevState, newItem];
      });
    } else {
      const foundProduct = cartItems[foundProductIndex];
      const updatedProduct = { ...foundProduct, amount: foundProduct.amount + 1 };

      setCartItems((prevState) => {
        const newItems = [...prevState];
        newItems[foundProductIndex] = updatedProduct;
        return newItems;
      });
    }
  };

  const handleRemoveFromCart = (id: number) => {
    const foundProduct = cartItems.find((item) => item.id === id);
    if (!foundProduct) return;

    if (foundProduct?.amount === 1) {
      setCartItems((prevState) => {
        return prevState.filter((item) => item.id !== id);
      });
    } else {
      const foundProductIndex = cartItems.findIndex((item) => item.id === id);
      const updatedProduct = { ...foundProduct, amount: foundProduct?.amount - 1 };

      setCartItems((prevState) => {
        const newItems = [...prevState];
        newItems[foundProductIndex] = updatedProduct;
        return newItems;
      });
    }
  };

  const cartContextValue: CartContextObj = {
    items: cartItems,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    total: cartTotal,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;

//#endregion
