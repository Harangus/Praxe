import './scss/App.scss';
import React from 'react';
import { useState } from "react";
import './scss/index.scss';
import Header from "./header"
import Navbar from './navbar';
import ProductRow from './productsRow';
import Navigation from "./navigation";
import {faker} from "@faker-js/faker";


function App() {
  const [produktA, setProduktA] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);
  const [produktB, setProduktB] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);
  const [produktC, setProduktC] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);

  const [produktD, setProduktD] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);
  const [produktE, setProduktE] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);
  const [produktF, setProduktF] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);

  const [produktG, setProduktG] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);
  const [produktH, setProduktH] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);
  const [produktI, setProduktI] = useState([faker.commerce.productName(), faker.commerce.productDescription()]);

  return (
    <div>
      <Header content="ElektroShop"/>
      <Navbar />
      <ProductRow nazevA={produktA[0]} popisA={produktA[1]} nazevB={produktB[0]} popisB={produktB[1]} nazevC={produktC[0]} popisC={produktC[1]}/>
      <ProductRow nazevA={produktD[0]} popisA={produktD[1]} nazevB={produktE[0]} popisB={produktE[1]} nazevC={produktF[0]} popisC={produktF[1]}/>
      <ProductRow nazevA={produktG[0]} popisA={produktG[1]} nazevB={produktH[0]} popisB={produktH[1]} nazevC={produktI[0]} popisC={produktI[1]}/>
      <Navigation />
    </div>
  );
}

export default App;