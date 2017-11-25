import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const BeerQuality = ({rating, setRate, children}) =>
	<div>
		<div>{children}</div>
		<div>
			<Rater total={5} rating={rating}
			       onRate={(rate) => setRate(rate)} />
		</div>
	</div>;

export default BeerQuality;