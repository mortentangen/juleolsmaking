import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import './react-rater-customize.css';
import './BeerCharacteristic.css';

const BeerCharacteristic = ({ rating, setRate, children }) => (
  <div className="BeerCharacteristic_container react-rater-customize">
    <div>{children}</div>
    <div className="BeerCharacteristic_rater">
      <Rater total={5} rating={rating} onRate={rate => setRate(rate)} />
    </div>
  </div>
);

export default BeerCharacteristic;
