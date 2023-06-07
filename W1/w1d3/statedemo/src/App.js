import './App.css';
import StylesComponent from './components/StylesComponent';
import VideoDetails from './components/VideoDetails';


function App() {
  return (
    <div className="App">
      <StylesComponent />
      <hr/>

      <VideoDetails title='Boondock Saints' views={200} hashtags={['boondock', 'saints', 'awesomemovie']}/>
      <VideoDetails title='Creed' views={500} hashtags={['creed', 'boxing', 'Michael b jordan']}/>
      <VideoDetails title='Law Abiding Citizen' views={1000} hashtags={['law', 'dark', 'thriller']}/>
      <VideoDetails title='Pulp Fiction' views={1000} hashtags={['pulpfiction', 'dark', 'thrilling']}/>

    </div>
  );
}

export default App;
