import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class CreatePost extends Component {
  constructor(){
    super()
  }

  _handlePostSubmit(event){
    console.log("button fired");
    event.preventDefault();

    let object = {
      name: event.target.name.value,
      title: event.target.title.value,
      post: event.target.post.value
    }

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/bloggerAry/", {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      response.json();
    });

    event.target.reset();

  }


  render(){
    return (
      <div>
        <form onSubmit={ this._handlePostSubmit }>
          <label>Authors Name</label>
          <input type="text" name="name"/>
          <label>Title</label>
          <input type="text" name="title"/>
          <label>Blog Post...</label>
          <textarea name="post"/>
          <Link to="/"><button type="submit">Submit</button></Link>
        </form>
      </div>
    )
  }
}
