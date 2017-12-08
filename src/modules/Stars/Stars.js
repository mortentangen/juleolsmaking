import React from 'react';
import './Stars.css'

const Stars = ({ nr, size = 10, color = '#c9af42' }) =>
	nr
		? new Array(nr).fill().map((_, index) => <span key={index}
		                                               className="Stars_container"
		                                               style={{ fontSize: size, color: color }} />)
		: '-';


export default Stars;