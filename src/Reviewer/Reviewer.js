import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { fire } from '../fire';
import './Reviewer.css'

class Reviewer extends Component {

	constructor(props) {
		super(props);
		this.state = { beerList: [] }
	}

	componentDidMount() {
		/* Create reference to messages in Firebase Database */
		let messagesRef = fire.database().ref('beer');
		messagesRef.on('child_added', snapshot => {
			/* Update React state when message is added at Firebase Database */
			const { brand, name, year } = snapshot.val();
			const beer = { brand, name, year, id: snapshot.key };
			this.setState((state, props) => ({
				beerList: [...state.beerList, beer]
			}));
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
				<img className="googlePhoto" src={currentUser.photoURL} alt="profilbilde" />
				<div>
					Velg øl
					{this.state.beerList.map(beer =>
						<div key={beer.id}><Link to={`/reviewer/${beer.id}`}>{beer.brand}</Link></div>
					)}
				</div>
				<div>
					<Link to="/">Tilbake</Link>
				</div>
				<div><button className="Reviewer_logoutBtn" onClick={() => this.signOut()}>Logg ut</button></div>
			</div>
		);
	}
}

export default Reviewer;