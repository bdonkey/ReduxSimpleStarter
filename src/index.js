import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchBar'
import VideoDetail from './components/videoDetail'
import YTSearch from 'youtube-api-search'
import VideoList from './components/videoList';

const API_Key = 'AIzaSyAzTLv4YncWKcCkLKr2LqUCgefK5Kpx0EQ';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_Key, term: 'swift iOS'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // = {videos: videos}
    });

  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDom.render(<App/>, document.querySelector('.container'));