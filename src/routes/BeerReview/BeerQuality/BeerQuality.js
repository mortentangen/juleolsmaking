import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import './react-rater-customize.css';
import './BeerQuality.css';

const BeerQuality = ({rating, setRate, children}) =>
	<div className="BeerQuality_container react-rater-customize">
		<div>{children}</div>
		<div className="BeerQuality_rater">
			<Rater total={5} rating={rating}
			       onRate={(rate) => setRate(rate)} />
		</div>
	</div>;

export default BeerQuality;