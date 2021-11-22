import React from 'react';
import './feed-one.css';
import CardList from './CardList';

class FeedOne extends React.Component {
    constructor() {
        super()
        this.state = {
            albums: [],
        }
    }


    // componentDidMount() {
    //     console.log('check');
    //     fetch('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list1').then(response => response.json())
    //     .then(items => this.setState({albums: items}));
    // }

    

}

    const albums = [
        {title: 'Jackidy Jack', artist: 'Luanda', label: 'MTV Records', year: '1973'}, 
        {title: 'Sunshine', artist: 'Rey Goldman', label: 'Teen Records', year: '1989'}
    ]

function feedOne() {
    return(
        <div className='feedone-box'>
            <h1 className='azure'>Feed one</h1>
            <div className='card-container'>
                <CardList items={albums}/>
            </div>
        </div>
    );
}

export default feedOne;