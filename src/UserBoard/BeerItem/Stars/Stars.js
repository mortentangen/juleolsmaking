import React from 'react';
import './Stars.css'

const Stars = ({ nr }) =>
	new Array(nr).fill().map((_, index) => <span key={index} className="Stars_container" />);


export default Stars;