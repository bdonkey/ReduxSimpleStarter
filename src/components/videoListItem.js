import React, {Component} from 'react';

/* below is equal
const VideoListItem = (props) => {
 const video = props.video;
 */
 const VideoListItem = ({video}) => {
   console.log(video);
   const imgurl = video.snippet.thumbnails.default.url;
 return (
   <li className="list-group-item">
     <div className="video-list media">
       <div className="media-left">
         <img className="media-object" src={imgurl}/>
       </div>
       <div className="media-body">
         <div className="media-heading">{video.snippet.title}</div>
       </div>
     </div>
   </li>
 )
};

export default VideoListItem;
