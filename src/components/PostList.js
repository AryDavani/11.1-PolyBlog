import React, {Component} from 'react';
import ShowPost from './ShowPost';
import {Link} from 'react-router-dom';


export default class PostList extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  componentWillMount(){
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/bloggerAry/").then((results) => {
      return results.json();
    }).then((data) => {
      this.setState({
        data: data
      });
      console.log("state", this.state.data);
    })
  }

  render() {
    console.log('this props', this.props.match);
    let blogs = this.state.data.map((blog, index) => {
      return (
        <div key={index} className="posts">
          <Link to={`${this.props.match.url}/${blog._id}`}>{ blog.title }</Link>
        </div>
      )
    })

    return (
      <div className="card">
        <h4>
          { blogs }
        </h4>
      </div>
    )
  }

}
