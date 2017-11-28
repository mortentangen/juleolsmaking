import React from 'react';
import { Link } from 'react-router-dom'
import BeerImage from '../../BeerImage/BeerImage';
// TODO move stars
import Stars from '../../Stars/Stars';
import './BeerItem.css';
import { getUserScore, getTotalScore } from '../../vote-service';

const BeerItem = ({ beer, votes }) =>
	<div key={beer.id} className="BeerItem_container">
		<div className="BeerItem_beerImage">
			<BeerImage image={beer.image} />
		</div>
		<div className="BeerItem_row">
			<div className="BeerItem_description">
				<Link to={`/userboard/${beer.id}`}>
					<div className="BeerItem_beerName">
						<div>{beer.brand}</div>
						<div> {beer.name} ({beer.year})</div>
					</div>
				</Link>
			</div>
			<div className="BeerItem_individualScore">
				{
					Object.entries(votes).map(([key, value]) =>
						<div key={key}><span>{key}</span><Stars nr={getUserScore(value)} size={14} /></div>
					)
				}
			</div>
		</div>
		<div className="BeerItem_score">
			<span>{getTotalScore(votes)}</span>
			<span className="BeerItem_star"><Stars nr={1} /></span>
		</div>
	</div>;

export default BeerItem;