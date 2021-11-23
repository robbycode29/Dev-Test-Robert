import React, {Component} from 'react';
import './feed-one.css';
import CardList from './CardList';

//     // componentDidMount() {
//     //     console.log('check');
//     //     fetch('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list1').then(response => response.json())
//     //     .then(items => this.setState({albums: items}));
//     // }

    

// }

    // const albums = [
    //     {title: 'Jackidy Jack', artist: 'Luanda', label: 'MTV Records', year: '1973'}, 
    //     {title: 'Sunshine', artist: 'Rey Goldman', label: 'Teen Records', year: '1989'}
    // ]

class FeedOne extends Component {
    constructor() {
        super();
        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        fetch(' https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list1')
        .then(response => response.json())
        .then(response => {
            let items = response.data.items;
            this.setState({albums: items})
        });
    }

    render() {
        return(
            <div className='feedone-box'>
                <h1 className='azure'>Feed one</h1>
                <div className='card-container'>
                    <CardList items={this.state.albums}/>
                </div>
            </div>
        );
    }
    
}

export default FeedOne;
