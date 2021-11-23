import React, {Component} from 'react';
import './feed.css';
import CardList from './CardList';


class Feed extends Component {
    constructor() {
        super();
        this.state = {
            album: []
        }
    }

    componentDidMount() {
        this.getFeed()
        this.timer = setInterval(() => this.getFeed(), 20000)
    }

    async getFeed() {
        // fetch('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list1')
        // .then(response => response.json())
        // .then(response => {
        //     let items = response.data.items;
        //     this.setState({albumOne: items})
        // });

        let apicall1 = fetch('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list1');
        let apicall2 = fetch('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list2');
        let apicall3 = fetch('https://api.netbet.com/development/randomFeed?website=casino&lang=eu&device=desktop&source=list3');
        let item = [];


        Promise.all([apicall1, apicall2, apicall3])
        .then(files => {
            files.forEach(file => {
                process(file.json());
            })
            
        })
        .catch(err => {

        });

        let process = (prom) => {
            prom.then(transdata => {

                function dynamicSort(property) {
                    var sortOrder = 1;
                    if(property[0] === "-") {
                        sortOrder = -1;
                        property = property.substr(1);
                    }
                    return function (a,b) {
                        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                        return result * sortOrder;
                    }
                }

                item = item.concat(transdata.data.items);
                item.sort(dynamicSort('title'));

                this.setState({album: item})
            })
        }
    }

    render() {
        return(
            <div className='feed-box'>
                <h1 className='azure'>You must listen to</h1>
                <div className='card-container'>
                    <CardList items={this.state.album}/>
                </div>
            </div>
        );
    }
    
}

export default Feed;
