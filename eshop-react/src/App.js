import './scss/App.scss';
import React from 'react';
import { useState } from "react";
import './scss/index.scss';
import Header from "./header"
import Navbar from './navbar';
import ProductRow from './productsRow';

function App() {
  const [produktA, setProduktA] = useState(["Nokia 3310", "Nejvíc legendární mobilní telefon, na kterém můžete hrát snakea"]);
  const [produktB, setProduktB] = useState(["iPhone 12 mini", "Velmi malý a výkoný telefon, který ohromí svým výkonem, ale baterií zas tak ne"]);
  const [produktC, setProduktC] = useState(["Nothing Phone", "První telefon od nové firmy Nothing, Elnur si ho celkem chválí"]);

  return (
    <div>
      <Header content="ElektroShop"/>
      <Navbar />
      <ProductRow nazevA={produktA[0]} popisA={produktA[1]} nazevB={produktB[0]} popisB={produktB[1]} nazevC={produktC[0]} popisC={produktC[1]}/>
      <ProductRow />
      <ProductRow />
    </div>
  );
}

export default App;