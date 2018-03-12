import React from 'react';
import ReactDOM from 'react-dom' // Namespaced by npm so no directory needed
import SearchBar from './components/search_bar'; // Not namespaced so need relative directory from this file

const API_KEY = 'AIzaSyDU0S7COi9iQ_sbDp_tKHTLtwog64i9k30'; // YouTube API key

// Create a new Component
// This component should produce some html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
// Take this components generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
