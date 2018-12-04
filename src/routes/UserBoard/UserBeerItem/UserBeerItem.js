import React from 'react';
import { Link } from 'react-router-dom';
import BeerImage from '../../../modules/BeerImage/BeerImage';
import Stars from '../../../modules/Stars/Stars';
import './UserBeerItem.css';
import connect from '../../../connect';
import fire from '../../../fire';
import { getUserScore } from '../../../vote-service';

const UserBeerItem = ({ beer, votes }) => (
  <div className="UserBeerItem_container">
    <Link to={`/userboard/${beer.id}`}>
      <div key={beer.id} className="UserBeerItem_innerContainer">
        <div className="UserBeerItem_beerImage">
          <BeerImage image={beer.image} />
        </div>
        <div className="UserBeerItem_row">
          <div className="UserBeerItem_description">
            <div className="UserBeerItem_beerName">
              <div>{beer.brand}</div>
              <div> {beer.name}</div>
            </div>
          </div>
          <div className="UserBeerItem_detailedScore">
            <div>
              <span>
                Lukt <Stars nr={votes.lukt} />
              </span>
              <span>
                Munnfølelse <Stars nr={votes.munnfolelse} />
              </span>
            </div>
            <div>
              <span>
                Smak <Stars nr={votes.smak} />
              </span>
              <span>
                Ettersmak <Stars nr={votes.ettersmak} />
              </span>
            </div>
          </div>
        </div>
        <div className="UserBeerItem_score">
          <span>{getUserScore(votes)}</span>
          <span className="UserBeerItem_star">
            <Stars nr={1} size={32} />
          </span>
        </div>
      </div>
    </Link>
  </div>
);

const ref = ({ beer }) => `votes/${beer.id}/${fire.auth().currentUser.uid}`;

const setStateFromSnapshot = snapshot => (prevState, props) => ({
  votes: snapshot.val() || {}
});

export default connect(
  'votes',
  ref,
  setStateFromSnapshot
)(UserBeerItem);
