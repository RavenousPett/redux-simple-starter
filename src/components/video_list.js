import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
    // Iterate through each video and return a video list item component. Returns an array of JSX
    // props.videos.map(video => {, same as props.videos.map(function(video){
    const videoItems = props.videos.map(video => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return(
        <ul className="list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
