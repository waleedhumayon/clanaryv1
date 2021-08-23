import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1 className='title-promo'>Your next academic adventure awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>Sign In
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;