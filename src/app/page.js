'use client';
import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import SliderCards from './components/SliderCards';
import MainSlider2 from './components/MainSlider2';
import SettingOffset1 from './components/SettingOffset1';
import HeaderMenu from './components/HeaderMenu';
import Footer from './components/Footer';
import SocialIcon from './components/SocialIcon';
import { ThemeProvider } from './context/ThemeContext';
import MegaMenu from './components/MegaMenu';

const PageLayout = () => {
  return (
    <div className='container-fluid'>
      <MainSlider2 />
      <SliderCards />
      <SettingOffset1 />
      <SocialIcon />
      <Footer />
    </div>
  );
};

export default PageLayout;
