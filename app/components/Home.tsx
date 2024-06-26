import React from 'react';
import NavBar from '../navbar/page';
import Footer from './Footer';
import Carousel from '../Carousel/page';
import Slider from './Slider';
import { SliderData } from './SliderData';

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel heading='Start of new beginning.....' message='Love what you do and do what you love.' />
      <Slider slides={SliderData} />
      <Footer />
    </>
  );
};

export default Home;