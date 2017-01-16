import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchBar'
import VideoDetail from './components/videoDetail'
import YTSearch from 'youtube-api-search'
import VideoList from './components/videoList';

const API_Key = 'AIzaSyAzTLv4YncWKcCkLKr2LqUCgefK5Kpx0EQ';


class App extends Component  {

  constructor(props) {
    super(props)

    this.state = {videos: []};

    YTSearch({key: API_Key, term: 'swift iOS'}, (videos ) => {
      this.setState({videos}) ; // = {videos: videos}
    });

  }

  render () {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video = {this.state.videos[0]} />
        <VideoList videos = {this.state.videos}/>
      </div>
    )
  }
};

ReactDom.render(<App/>, document.querySelector('.container'));