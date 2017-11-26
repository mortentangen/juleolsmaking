import React from 'react';

const defaultImage = 'https://bilder.vinmonopolet.no/bottle.png';

const BeerImage = ({ image }) => <img src={image || defaultImage} alt="bilde av øl" />;

export default BeerImage;