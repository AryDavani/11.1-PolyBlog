import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BaseLayout(props) {
  return (
    <div>
      <div className="flex nav-bar">
        <h1>PollyBlog</h1>
        <NavLink to="/create-post">Create Post</NavLink>
        <NavLink to="/show-posts">Show All Posts</NavLink>
      </div>
      { props.children }
  </div>
  )
}
