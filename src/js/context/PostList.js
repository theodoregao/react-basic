import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super();
    this.state = {
      posts: [],
      errorMsg: null,
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          errorMsg: "Cannot retrieve data!",
        });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of posts{" "}
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        <div>{errorMsg ? errorMsg : null}</div>
      </div>
    );
  }
}

export default PostList;
