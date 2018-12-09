import React from 'react';
import { Link } from 'react-router-dom';
import BeerImage from '../../../modules/BeerImage/BeerImage';
import Stars from '../../../modules/Stars/Stars';
import './UserBoardItem.css';
import connect from '../../../connect';
import fire from '../../../fire';
import { getUserScore } from '../../../vote-service';

const UserBoardItem = ({ beer, votes, currentYear }) => (
  <div className="UserBoardItem_container">
    <Link to={`/userboard/${currentYear}/${beer.id}`}>
      <div key={beer.id} className="UserBoardItem_innerContainer">
        <div className="UserBoardItem_beerImage">
          <BeerImage image={beer.image} />
        </div>
        <div className="UserBoardItem_row">
          <div className="UserBoardItem_description">
            <div className="UserBoardItem_beerName">
              <div>{beer.brand}</div>
              <div> {beer.name}</div>
            </div>
          </div>
          <div className="UserBoardItem_detailedScore">
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
        <div className="UserBoardItem_score">
          <span>{getUserScore(votes)}</span>
          <span className="UserBoardItem_star">
            <Stars nr={1} size={32} />
          </span>
        </div>
      </div>
    </Link>
  </div>
);

const ref = ({ currentYear, beer }) =>
  `votes/${currentYear}/${beer.id}/${fire.auth().currentUser.uid}`;

const setStateFromSnapshot = snapshot => (prevState, props) => ({
  votes: snapshot.val() || {}
});

export default connect(
  'votes',
  ref,
  setStateFromSnapshot
)(UserBoardItem);
