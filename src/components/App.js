import { useEffect, useState } from 'react';
import data from '../data/products.json';

import ls from '../services/ls';

import Header from './Header';
import ProductList from './ProductList';

const App = () => {
  const [products, setProducts] = useState(ls.get('products', []));
  const [hidden, setHidden] = useState('hidden');
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      setProducts(data);
    }
  }, [products]);

  useEffect(() => {
    ls.set('products', products);
  }, [products]);

  const handleConfirm = (value) => {
    if (value === 'Yes') {
      setProducts(newProducts);
    }
    setHidden('hidden');
  };

  const handleBtn = (id) => {
    setNewProducts(products.filter((item) => item.code !== parseInt(id)));
    setHidden('');
  };

  return (
    <>
      <Header></Header>
      <ProductList
        products={products}
        handleBtn={handleBtn}
        hidden={hidden}
        confirm={handleConfirm}
      ></ProductList>
    </>
  );
};

export default App;