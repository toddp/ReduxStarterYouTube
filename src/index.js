import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';


const API_KEY='AIzaSyBnHNyZtHtozKjfE02EhVmF8F3TdLeSupo'
YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

//Create a new component. Should produce some HTML.

const App = function() {
//  return <div>Hi!</div>;
return (
  <div>
  <SearchBar />
  </div>
)
}

//Take this component's generated HTML and put it in the page / DOM.
ReactDOM.render(< App />, document.querySelector('.container'));
