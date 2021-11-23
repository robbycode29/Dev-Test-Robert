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
        this.showLoading()
        this.getFeed()
        this.timer = setInterval(() => {
            this.showLoading()
            this.getFeed()
        }, 20000)
    }


    showLoading = () => {
        let loading = document.getElementById('loader');
        loading.style.display = 'block'
    }
    hideLoading = () => {
        let loading = document.getElementById('loader');
        loading.style.display = 'none'
    }

    showErrorMessage = () => {
        this.hideLoading();

        let loading = document.getElementById('error-message');
        loading.style.display = 'block'
    }
    hideErrorMessage = () => {

        let loading = document.getElementById('error-message');
        loading.style.display = 'none'
    }

    async getFeed() {
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
            console.log(err)
            this.showErrorMessage()
        });

        let process = (prom) => {
            prom.then(transdata => {

                this.hideLoading()
                this.hideErrorMessage();

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
                    <h3 className='placeholder hidden' id='loader'>Please wait...</h3>
                    <h3 className='placeholder hidden' id='error-message'>Sorry, couldn't load tracks</h3>
                    <CardList items={this.state.album}/>
                </div>
            </div>
        );
    }
    
}

export default Feed;
