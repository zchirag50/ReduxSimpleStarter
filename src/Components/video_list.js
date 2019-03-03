import React, { Component } from 'react';
import VidesoListItem from './video_list_item';

const VideoList = (props) => {

    const VidesoList = props.videos.map(video => {
        return (
            <VidesoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {VidesoList}
        </ul>
        );
};


export default VideoList;