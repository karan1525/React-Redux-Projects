import React from 'react';
import VideoListItem from './video_list_item';

//Class based -> props are always available 
// Function based -> only when passed in a function

// Stay away from for loops -> use maps
// var array = [1,2,3]
// array.map(function(number) { return number * 2} )
// passes all the values into the function

const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		return ( 
				<VideoListItem 

				onVideoSelect= {props.onVideoSelect}
				key={video.etag} 
				video={video} />
			);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ ul>
	);
};

export default VideoList;