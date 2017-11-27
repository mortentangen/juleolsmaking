import React, { Component } from 'react';
import fire from '../fire';

const signOut = (history) => {
	console.log('this', this);
	fire.auth().signOut().then(() => {
		console.log('Logged out: fire.auth().currentUser', fire.auth().currentUser);
		history.push('/login');
	}).catch((error) => {
		console.error('Noe gikk galt under utlogging', error);
	});
};

const User = ({ history }) => (
	<div className="User_container">
		<div><img className="googlePhoto" src={fire.auth().currentUser.photoURL} alt="profilbilde" /></div>
		<div>
			<button className="buttonAsLink" onClick={() => signOut(history)}>Logg ut</button>
		</div>
	</div>
);

export default User;