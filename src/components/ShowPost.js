import React, {Component} from 'react';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    }

  }

  componentWillMount(){
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/bloggerAry/").then((results) => {
      return results.json();
    }).then((data) => {
      let obj = data.find((item) => {
        return item._id === this.props.match.params.id
      })
      this.setState({
        post: obj
      })
      console.log("data", data);
      console.log("props", this.props);

    })
  }

  render(){

    return (
      <div className="single-post well">
        <h4>
          {this.state.post.post}
        </h4>
        <p>
          by: {this.state.post.name}
        </p>
      </div>
    )
  }
}
