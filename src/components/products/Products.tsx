import { useEffect, useState } from 'react';

import { API_URL } from '../../utils/constants';
import Product from '../../models/product';
import ProductItem from './ProductItem';

import classes from './Products.module.css';

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(API_URL);
      const data = await res.json();

      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className='container'>
      <h1>Products</h1>
      <ul className={classes.products}>
        {products.map((prod) => (
          <ProductItem key={prod.id} item={prod} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
