import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { fire } from '../fire';
import './Client.css'

class Client extends Component {

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
						<div key={beer.id}><Link to={`/client/${beer.id}`}>{beer.brand}</Link></div>
					)}
				</div>
				<div>
					<Link to="/">Board</Link>
				</div>
			</div>
		);
	}
}

export default Client;