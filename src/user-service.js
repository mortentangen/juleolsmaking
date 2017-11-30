import fire from './fire';

const persistDataForNewUser = (user) => {
	const { uid, displayName, email, photoURL } = user;
	fire.database()
		.ref('users')
		.update({
			[uid]: { displayName, email, photoURL }
		});
};

export { persistDataForNewUser };
