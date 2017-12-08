import React, { Component } from 'react';
import { fire } from '../../fire';
import './BeerReview.css';

import connect from '../../connect';
import BeerQuality from './BeerQuality/BeerQuality';
import ChristmasFont from '../../modules/ChristmasFont/ChristmasFont';

const getUserVoteRef = beerId => `votes/${beerId}/${fire.auth().currentUser.uid}`;

class BeerReview extends Component {

	rate(aspect, rate) {
		if (rate.type === 'click') {
			console.log('set rating:', aspect, rate.rating);
			fire.database()
				.ref(`${getUserVoteRef(this.props.match.params.beerId)}`)
				.update({
					[aspect]: rate.rating
				});
		}
	}

	render() {
		const defaultImage = 'https://bilder.vinmonopolet.no/bottle.png';
		const { brand, name, year, image = defaultImage } = this.props.beer;
		const {lukt = 0, smak = 0, munnfolelse = 0, ettersmak = 0} = this.props.vote;
		return (
			<div>
				<div className="BeerReview_beerTitle">
					<div><ChristmasFont>{brand}</ChristmasFont></div>
					<div><ChristmasFont>{name} ({year})</ChristmasFont></div>
				</div>
				<div className="BeerReview_container">
					<div className="BeerReview_imageContainer">
						<img className="BeerReview_beerImage" src={image}
						     alt="beerimage" />
					</div>
					<div>
						<BeerQuality rating={lukt}
						             setRate={(rating) => this.rate('lukt', rating)}>
							Lukt
						</BeerQuality>
						<BeerQuality rating={munnfolelse}
						             setRate={(rating) => this.rate('munnfolelse', rating)}>
							Munnfølelse
						</BeerQuality>
						<BeerQuality rating={smak}
						             setRate={(rating) => this.rate('smak', rating)}>
							Smak
						</BeerQuality>
						<BeerQuality rating={ettersmak}
						             setRate={(rating) => this.rate('ettersmak', rating)}>
							Ettersmak
						</BeerQuality>
					</div>
				</div>
			</div>
		)
	}
}

const firebaseBeerRef = props => `beer/${props.match.params.beerId}`;
const setStateFromSnapshotForBeer = snapshot => () => ({ beer: { ...snapshot.val(), id: snapshot.key } });

const firebaseVoteRef = (props) => {
	return getUserVoteRef(props.match.params.beerId);
};
const setStateFromSnapshotForVote = snapshot => () => ({ vote: snapshot.val() || {} });

export default connect('vote', firebaseVoteRef, setStateFromSnapshotForVote)(connect('beer', firebaseBeerRef, setStateFromSnapshotForBeer)(
	BeerReview
));