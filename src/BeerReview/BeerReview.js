import React, { Component } from 'react';
import { fire } from '../fire';

import BeerQuality from '../BeerQuality/BeerQuality';

class BeerReview extends Component {
	constructor(props) {
		super(props);
		this.state = { beer: {}, vote: {} };
		this.currentUserId = fire.auth().currentUser.uid;
		this.beerId = this.props.match.params.beerId;
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
		fire.database()
			.ref(`beer/${this.beerId}`)
			.on('value', snapshot => {
				const { brand, name, year } = snapshot.val();
				const beer = { brand, name, year, id: snapshot.key };
				this.setState({ beer });
			});
		fire.database()
			.ref(this.userVoteId)
			.on('value', snapshot => {
				this.setState((state, props) => ({
					vote: { ...state.vote, ...snapshot.val() }
				}));
			})
	}

	render() {
		const { brand, name, year } = this.state.beer;
		console.log('state', this.state);
		return (
			<div>
				<p>{brand} {name} ({year})</p>
				<BeerQuality rating={this.state.vote.lukt}
				             setRate={(rating) => this.rate('lukt', rating)}>
					Lukt
				</BeerQuality>
				<BeerQuality rating={this.state.vote.utseende}
				             setRate={(rating) => this.rate('utseende', rating)}>
					Utseende
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
		)
	}
}

export default BeerReview;