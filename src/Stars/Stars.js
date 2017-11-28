import React from 'react';
import './Stars.css'

const Stars = ({ nr, size = 14 }) =>
	nr ? new Array(nr).fill().map((_, index) => <span key={index} className="Stars_container" style={{ fontSize: size }} />) : '-';


export default Stars;