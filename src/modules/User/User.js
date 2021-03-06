import React from 'react';
import fire from '../../fire';
import './User.css';

const signOut = history => {
  fire
    .auth()
    .signOut()
    .then(() => {
      history.push('/login');
    })
    .catch(error => {
      console.error('Noe gikk galt under utlogging', error);
    });
};

const User = ({ history }) => (
  <div className="User_container">
    <button className="buttonAsLink" onClick={() => signOut(history)}>
      <img
        className="User_googlePhoto"
        src={fire.auth().currentUser.photoURL}
        alt="profilbilde"
      />
    </button>
  </div>
);

export default User;
