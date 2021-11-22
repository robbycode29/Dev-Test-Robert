import React from 'react';



const Card = ({title, artist, label, year}) => {
    return(
        <div className='bg-light-blue dib br3 pa3 ma2 grow'>
            <h2>Title: {title}</h2>
            <h3>Artist: {artist}</h3>
            <h3>Label: {label}</h3>
            <h3>Year: {year}</h3>
        </div>
    );
}

export default Card;