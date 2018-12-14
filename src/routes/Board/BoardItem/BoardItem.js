import React from 'react';
import BeerImage from '../../../modules/BeerImage/BeerImage';
import Stars from '../../../modules/Stars/Stars';
import './BoardItem.css';
import { getUserScore, getTotalBeerScore } from '../../../vote-service';

const BoardItem = ({ beer, votes, filter, usersWithColors }) => (
  <div key={beer.id} className="BoardItem_container">
    <div className="BoardItem_innerContainer">
      <div className="BoardItem_beerImage">
        <BeerImage image={beer.image} />
      </div>
      <div className="BoardItem_row">
        <div className="BoardItem_description">
          <div className="BoardItem_beerName">
            <div>{beer.brand}</div>
            <div> {beer.name}</div>
          </div>
        </div>
        <div className="BoardItem_individualScore">
          {Object.entries(votes).map(([userId, value]) => (
            <div key={userId}>
              <Stars
                nr={getUserScore(value, filter)}
                size={12}
                color={usersWithColors.find(user => user.uid === userId).color}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="BoardItem_score">
        <span>{getTotalBeerScore(votes, filter)}</span>
        <span className="BoardItem_star">
          <Stars nr={1} size={20} />
        </span>
      </div>
    </div>
  </div>
);

export default BoardItem;
