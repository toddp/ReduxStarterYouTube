import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY='AIzaSyBnHNyZtHtozKjfE02EhVmF8F3TdLeSupo'


//Create a new component. Should produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        //console.log(data);
        this.setState({videos});
    });
  }


  render() {
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//Take this component's generated HTML and put it in the page / DOM.
ReactDOM.render(< App />, document.querySelector('.container'));
