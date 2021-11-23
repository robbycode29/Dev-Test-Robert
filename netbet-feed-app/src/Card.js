import React from 'react';
import './Card.css';
import vinyl from './assets/vinyl-record.svg';



const Card = (props) => {
    return(
        <div className='bg-light-blue dib br3 pa3 ma2 grow const-size'>
            <img className='vinyl' src={vinyl} alt='Record'/>
            <h2>Title: {props.albums.title}</h2>
            <h3>Artist: {props.albums.artist}</h3>
            <h3>Label: {props.albums.label}</h3>
            <h3>Year: {props.albums.year}</h3>
        </div>
    );
}

export default Card;