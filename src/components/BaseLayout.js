import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BaseLayout(props) {
  return (
    <div>
      <div className="flex nav-bar">
        <NavLink to="/">
          <span className="logo1">P</span>
          <span className="logo2">o</span>
          <span className="logo3">l</span>
          <span className="logo4">y</span>
          <span className="logo5">B</span>
          <span className="logo6">l</span>
          <span className="logo7">o</span>
          <span className="logo8">g</span>
        </NavLink>
        <NavLink to="/create-post">Create Post</NavLink>
        <NavLink to="/show-posts">Show All Posts</NavLink>
      </div>
      { props.children }
  </div>
  )
}
