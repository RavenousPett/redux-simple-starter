import React from 'react';
import ReactDOM from 'react-dom'

const API_KEY = 'AIzaSyDU0S7COi9iQ_sbDp_tKHTLtwog64i9k30';

// Create a new Component
// This component should produce some html
const App = () => {
    return <div>Hi!</div>;
}
// Take this components generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
