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
      <div className="form-div">
        <form onSubmit={ this._handlePostSubmit }>
          <div className="form-group">
            <label>Authors Name</label>
            <input type="text" className="form-control" name="name" placeholder="Enter name" />
          </div>
          <div>
            <label>Title</label>
            <input type="text" className="form-control" name="title" placeholder="Enter title" />
          </div>
          <div className="form-group">
            <label>Blog Post</label>
            <textarea className="form-control" name="post" rows="15"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
