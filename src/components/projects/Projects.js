import React from 'react';
import Thumbnail from '../thumbnail';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
      />
    </div>
  )
}
 
export default Projects;