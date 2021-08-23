import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Where might your academic journey take you?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/northeastern.jpg'
              text='Northeastern University'
              label='Boston, MA'
              path='/signUp'
            />
            <CardItem
              src='images/windsor.jpg'
              text='The University of Windsor'
              label='Windsor, ON'
              path='/signUp'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/melbourne.jpg'
              text='The University of Melbourne'
              label='Melbourne, Victoria'
              path='/signUp'
            />
            <CardItem
              src='images/city_uni.jpg'
              text='City University London'
              label='London, UK'
              path='/signUp'
            />
            <CardItem
              src='images/duke.jpg'
              text='Duke University'
              label='Durham, NC'
              path='/signUp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;