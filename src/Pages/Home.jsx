import React from 'react'
import Hero from '../Components/hero/Hero';
import Features from '../Components/hero/Features';
import Main from '../Components/main/Main';
import FlashDeals from '../Components/FlashDeals/FlashDeals';

import Header1 from '../Components/headers/Header1';
import Header2 from '../Components/headers/Header2';
import Header3 from '../Components/headers/Header3';
import FeatuerdProducts from '../Components/FeaturedProducts/FeatuerdProducts';



const Home = () => {
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />
      <Hero />
      <Features />
      <Main />
      <FlashDeals />
     

      {/* <FeatuerdProducts /> */}
    </>
  );
}

export default Home
