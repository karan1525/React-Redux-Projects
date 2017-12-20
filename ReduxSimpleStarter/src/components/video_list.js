import React from 'react'

//Class based -> props are always available 
// Function based -> only when passed in a function

const VideoList = (props) => {
	return (
		<ul className="col-md-4 list-group">
		{props.videos.length}
		</ ul>
	);
};

export default VideoList;