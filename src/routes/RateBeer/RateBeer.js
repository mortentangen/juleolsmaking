import React, { Component } from 'react';
import BeerCharacteristic from './BeerCharacteristic/BeerCharacteristic';
import ChristmasFont from '../../modules/ChristmasFont/ChristmasFont';

import './RateBeer.css';

class RateBeer extends Component {
  rate(aspect, rate) {
    const { saveRating } = this.props;
    const { currentYear, beerId } = this.props.match.params;
    if (rate.type === 'click') {
      console.log('set rating:', aspect, rate.rating);
      saveRating(currentYear, beerId, aspect, rate);
    }
  }

  render() {
    const defaultImage = 'https://bilder.vinmonopolet.no/bottle.png';
    console.log('props', this.props);
    const { brand, name, year, image = defaultImage } = this.props.beer;
    const {
      lukt = 0,
      smak = 0,
      munnfolelse = 0,
      ettersmak = 0
    } = this.props.vote;
    return (
      <div>
        <div className="RateBeer_beerTitle">
          <div>
            <ChristmasFont>{brand}</ChristmasFont>
          </div>
          <div>
            <ChristmasFont>
              {name} ({year})
            </ChristmasFont>
          </div>
        </div>
        <div className="RateBeer_container">
          <div className="RateBeer_imageContainer">
            <img className="RateBeer_beerImage" src={image} alt="beerimage" />
          </div>
          <div>
            <BeerCharacteristic
              rating={lukt}
              setRate={rating => this.rate('lukt', rating)}
            >
              Lukt
            </BeerCharacteristic>
            <BeerCharacteristic
              rating={munnfolelse}
              setRate={rating => this.rate('munnfolelse', rating)}
            >
              Munnfølelse
            </BeerCharacteristic>
            <BeerCharacteristic
              rating={smak}
              setRate={rating => this.rate('smak', rating)}
            >
              Smak
            </BeerCharacteristic>
            <BeerCharacteristic
              rating={ettersmak}
              setRate={rating => this.rate('ettersmak', rating)}
            >
              Ettersmak
            </BeerCharacteristic>
          </div>
        </div>
      </div>
    );
  }
}

export default RateBeer;
