import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BaseLayout(props) {
  return (
    <div>
      <div className="flex nav-bar">
        <NavLink to="/"><p className="logo">PolyBlog</p></NavLink>
        <NavLink to="/create-post">Create Post</NavLink>
        <NavLink to="/show-posts">Show All Posts</NavLink>
      </div>
      { props.children }
  </div>
  )
}
