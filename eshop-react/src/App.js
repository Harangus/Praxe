import './scss/App.scss';
import React from 'react';
import './scss/index.scss';
import Header from "./header"
import Navbar from './navbar';
import ProductRow from './productsRow';

function App() {
  return (
    <div>
      <Header content="ElektroShop"/>
      <Navbar />
      <ProductRow nazevA="Samsung galaxy S20" nazevB="iPhone 12 mini" nazevC="Nothing phone"/>
      <ProductRow />
      <ProductRow />
    </div>
  );
}

export default App;
