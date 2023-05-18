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
  const [produktA, setProduktA] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);
  const [produktB, setProduktB] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);
  const [produktC, setProduktC] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);

  const [produktD, setProduktD] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);
  const [produktE, setProduktE] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);
  const [produktF, setProduktF] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);

  const [produktG, setProduktG] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);
  const [produktH, setProduktH] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);
  const [produktI, setProduktI] = useState([faker.commerce.productName(), faker.commerce.productDescription(), faker.image.urlLoremFlickr({category: "technology"})]);
  
  return (
    <div>
      <Header content="ElektroShop"/>
      <Navbar />
      <ProductRow nazevA={produktA[0]} popisA={produktA[1]} imageA={produktA[2]} nazevB={produktB[0]} popisB={produktB[1]} imageB={produktB[2]} nazevC={produktC[0]} popisC={produktC[1]} imageC={produktC[2]}/>
      <ProductRow nazevA={produktD[0]} popisA={produktD[1]} imageA={produktD[2]} nazevB={produktE[0]} popisB={produktE[1]} imageB={produktE[2]} nazevC={produktF[0]} popisC={produktF[1]} imageC={produktF[2]}/>
      <ProductRow nazevA={produktG[0]} popisA={produktG[1]} imageA={produktG[2]} nazevB={produktH[0]} popisB={produktH[1]} imageB={produktH[2]} nazevC={produktI[0]} popisC={produktI[1]} imageC={produktI[2]}/>
      <Navigation /> 
    </div>
  );
}

export default App;