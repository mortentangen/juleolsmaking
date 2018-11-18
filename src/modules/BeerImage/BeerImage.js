import React from 'react';

const defaultImage = 'https://bilder.vinmonopolet.no/bottle.png';

const BeerImage = ({ image }) =>
    <img
        src={image || defaultImage}
        onError={event => {
            // in case the image no longer exists
            event.target.onError = null;
            event.target.src = defaultImage
        }}
        alt="bilde av øl" />;

export default BeerImage;