import React from 'react';
import { Link } from 'react-router-dom'
import BeerImage from '../../BeerImage/BeerImage';
import Stars from './Stars/Stars';
import './UserBeerItem.css';

const UserBeerItem = ({ beer }) =>
	<div key={beer.id} className="UserBeerItem_container">
		<div className="UserBeerItem_beerImage">
			<BeerImage image={beer.image} />
		</div>
		<div className="UserBeerItem_row">
			<div className="UserBeerItem_description">
				<Link to={`/userboard/${beer.id}`}>
					<div className="UserBeerItem_beerName">
						<div>{beer.brand}</div>
						<div> {beer.name} ({beer.year})</div>
					</div>
				</Link>
			</div>
			<div className="UserBeerItem_detailedScore">
				<div>
					<span>Lukt <Stars nr={2} /></span>
					<span>Munnfølelse <Stars nr={5} /></span>
				</div>
				<div>
					<span>Smak <Stars nr={4} /></span>
					<span>Ettersmak <Stars nr={1} /></span>
				</div>
			</div>
		</div>
		<div className="UserBeerItem_score">
			<span>17</span>
			<span className="UserBeerItem_star"><Stars nr={1} size={32} /></span>
		</div>
	</div>;

export default UserBeerItem;