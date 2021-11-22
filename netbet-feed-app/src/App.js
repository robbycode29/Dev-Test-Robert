// import logo from './logo.svg';
import './App.css';
import feedOne from './feed-one';


function App() {

  return (
    <div className="App">
      <header className="App-header f4 lh-title">
        <h1 className='white'>Net</h1>
        <h1 className='red'>Bet</h1>
        <h1 className='spaced'>Track Selection</h1>
      </header>
      <div className='App-body'>
        <div id='feed-1'>{feedOne()}</div>
      </div>
    </div>
  );
}

export default App;
