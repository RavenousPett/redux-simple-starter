import React, { Component } from 'react'; // Namespaced by npm so no directory needed
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // Not namespaced so need relative directory from this file

const API_KEY = 'AIzaSyDU0S7COi9iQ_sbDp_tKHTLtwog64i9k30'; // YouTube API key

YTSearch({key: API_KEY, term: 'surf wipeouts'}, function(data){
    console.log(data);
});

// Create a new Component
// This component should produce some html
class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}
// Take this components generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
