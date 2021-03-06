import _ from 'lodash';
import React, { Component } from 'react'; // Namespaced by npm so no directory needed
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // Not namespaced so need relative directory from this file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDU0S7COi9iQ_sbDp_tKHTLtwog64i9k30'; // YouTube API key

// Create a new Component
// This component should produce some html
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Super cars');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            // ES6 syntactial sugar for when key and value are the same
            // resolves to this.setState({ videos: videos });
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}
// Take this components generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
