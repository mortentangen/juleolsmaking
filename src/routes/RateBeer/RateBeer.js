import React, { Component } from 'react';
import { fire } from '../../fire';
import './RateBeer.css';

import connect from '../../connect';
import BeerCharacteristic from './BeerQuality/BeerCharacteristic';
import ChristmasFont from '../../modules/ChristmasFont/ChristmasFont';

const getUserVoteRef = (currentYear, beerId) =>
  `votes/${currentYear}/${beerId}/${fire.auth().currentUser.uid}`;

class RateBeer extends Component {
  rate(aspect, rate) {
    const { currentYear, beerId } = this.props.match.params;
    if (rate.type === 'click') {
      console.log('set rating:', aspect, rate.rating);
      fire
        .database()
        .ref(`${getUserVoteRef(currentYear, beerId)}`)
        .update({
          [aspect]: rate.rating
        });
    }
  }

  render() {
    const defaultImage = 'https://bilder.vinmonopolet.no/bottle.png';
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

const firebaseBeerRef = props => `beer/${props.match.params.beerId}`;
const setStateFromSnapshotForBeer = snapshot => () => ({
  beer: { ...snapshot.val(), id: snapshot.key }
});

const firebaseVoteRef = props => {
  const {currentYear, beerId} = props.match.params;
  return getUserVoteRef(currentYear, beerId);
};
const setStateFromSnapshotForVote = snapshot => () => ({
  vote: snapshot.val() || {}
});

export default connect(
  'vote',
  firebaseVoteRef,
  setStateFromSnapshotForVote
)(
  connect(
    'beer',
    firebaseBeerRef,
    setStateFromSnapshotForBeer
  )(RateBeer)
);
