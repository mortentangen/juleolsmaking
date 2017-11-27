import React from 'react';
import { Link } from 'react-router-dom'
import BeerImage from '../../BeerImage/BeerImage';
import Stars from './Stars/Stars';
import './BeerItem.css';

const BeerItem = ({ beer }) =>
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
			<div className="BeerItem_detailedScore">
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
		<div className="BeerItem_score">
			<span>17</span>
			<span className="BeerItem_star"><Stars nr={1} /></span>
		</div>
	</div>;

export default BeerItem;