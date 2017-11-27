import React, { Component } from 'react';
import { fire } from '../fire';
import './BeerReview.css';

import connect from '../connect';
import BeerQuality from './BeerQuality/BeerQuality';
import ChristmasFont from '../ChristmasFont/ChristmasFont';

class BeerReview extends Component {
	constructor(props) {
		super(props);
		this.state = { vote: {} };
		this.currentUserId = fire.auth().currentUser.uid;
		// this.beerId = this.props.match.params.beerId;
		this.userVoteId = `votes/${this.beerId}/${this.currentUserId}`;
	}

	rate(aspect, rate) {
		if (rate.type === 'click') {
			console.log('set rating:', aspect, rate.rating);
			fire.database().ref(`${this.userVoteId}`).update({
				[aspect]: rate.rating
			});
		}
	}

	componentDidMount() {
		// fire.database()
		// 	.ref(`beer/${this.beerId}`)
		// 	.on('value', snapshot => {
		// 		const beer = { ...snapshot.val(), id: snapshot.key };
		// 		this.setState({ beer });
		// 	});
		fire.database()
			.ref(this.userVoteId)
			.on('value', snapshot => {
				this.setState((state, props) => ({
					vote: { ...state.vote, ...snapshot.val() }
				}));
			})
	}

	render() {
		const defaultImage = 'https://bilder.vinmonopolet.no/bottle.png';
		const { brand, name, year, image = defaultImage } = this.props.beer;
		return (
			<div>
				<div className="BeerReview_beerTitle">
					<div><ChristmasFont>{brand}</ChristmasFont></div>
					<div><ChristmasFont>{name} ({year})</ChristmasFont></div>
				</div>
				<div className="BeerReview_container">
					<div>
						<img className="BeerReview_beerImage" src={image}
						     alt="beerimage" />
					</div>
					<div>
						<BeerQuality rating={this.state.vote.lukt}
						             setRate={(rating) => this.rate('lukt', rating)}>
							Lukt
						</BeerQuality>
						<BeerQuality rating={this.state.vote.smak}
						             setRate={(rating) => this.rate('smak', rating)}>
							Smak
						</BeerQuality>
						<BeerQuality rating={this.state.vote.munnfolelse}
						             setRate={(rating) => this.rate('munnfolelse', rating)}>
							Munnfølelse
						</BeerQuality>
						<BeerQuality rating={this.state.vote.ettersmak}
						             setRate={(rating) => this.rate('ettersmak', rating)}>
							Ettersmak
						</BeerQuality>
					</div>
				</div>
			</div>
		)
	}
}

const firebaseRef = props => `beer/${props.match.params.beerId}`;
const setStateFromSnapshot = snapshot => () => ({ beer: { ...snapshot.val(), id: snapshot.key } });

export default connect('beer', firebaseRef, setStateFromSnapshot)(BeerReview);