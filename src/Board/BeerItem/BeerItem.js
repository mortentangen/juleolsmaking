import React from 'react';
import { Link } from 'react-router-dom'
import BeerImage from '../../BeerImage/BeerImage';
// TODO move stars
import Stars from '../../Stars/Stars';
import './BeerItem.css';
import { getUserScore, getTotalBeerScore } from '../../vote-service';

const BeerItem = ({ beer, votes, usersWithColors }) =>
	<div key={beer.id} className="BeerItem_container">
		<div className="BeerItem_innerContainer">
			<div className="BeerItem_beerImage">
				<BeerImage image={beer.image} />
			</div>
			<div className="BeerItem_row">
				<div className="BeerItem_description">
					<Link to={`/userboard/${beer.id}`}>
						<div className="BeerItem_beerName">
							<div>{beer.brand}</div>
							<div> {beer.name}</div>
						</div>
					</Link>
				</div>
				<div className="BeerItem_individualScore">
					{
						Object.entries(votes).map(([userId, value]) =>
							<div key={userId}>
								<Stars nr={getUserScore(value)}
								       size={14}
								       color={usersWithColors.find(user => user.uid === userId).color} />
							</div>
						)
					}
				</div>
			</div>
			<div className="BeerItem_score">
				<span>{getTotalBeerScore(votes)}</span>
				<span className="BeerItem_star"><Stars nr={1} size={20} /></span>
			</div>
		</div>
	</div>;

export default BeerItem;