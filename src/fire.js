import firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyDKPvgyBUlqUbU-DIoljymYeX0XEPsBGgM',
	authDomain: 'juleol-smaking.firebaseapp.com',
	databaseURL: 'https://juleol-smaking.firebaseio.com',
	projectId: 'juleol-smaking',
	storageBucket: 'juleol-smaking.appspot.com',
	messagingSenderId: '399923262889'
};
const fire = firebase.initializeApp(config);
const authProvider = new firebase.auth.GoogleAuthProvider();

export { fire, authProvider };