import React from 'react';
import './Stars.css'

const Stars = ({ nr }) =>
	new Array(nr).fill().map(() => <span className="Stars_container" />);


export default Stars;