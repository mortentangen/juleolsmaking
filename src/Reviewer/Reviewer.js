import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { fire } from '../fire';
import User from '../User/User';
import BeerItem from './BeerItem/BeerItem';
import './Reviewer.css'

class Reviewer extends Component {

	constructor(props) {
		super(props);
		this.state = { beerList: [] }
	}

	componentDidMount() {
		/* Create reference to messages in Firebase Database */
		let messagesRef = fire.database().ref('beer');
		messagesRef.on('value', snapshot => {
			/* Update React state when message is added at Firebase Database */
			this.setState({beerList: snapshot.val().filter(Boolean)});
		})
	}

	signOut() {
		console.log('this', this);
		fire.auth().signOut().then(() => {
			console.log('Logged out: fire.auth().currentUser', fire.auth().currentUser);
			this.props.history.push('/login');
		}).catch((error) => {
			console.error('Noe gikk galt under utlogging', error);
		});
	}

	render() {
		const { currentUser } = fire.auth();
		console.log('currentUser', currentUser);
		console.log('beerList', this.state.beerList);
		return (
			<div>
				<div className="Reviewer_user">
					<User history={this.props.history} />
				</div>
				<div>
					{
						this.state.beerList.map(beer =>
							<BeerItem key={beer.id} beer={beer} />
						)
					}
				</div>
				<div className="Reviewer_gotoResult">
					<Link to="/">Resultater</Link>
				</div>
			</div>
		);
	}
}

export default Reviewer;