import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";

class About extends Component {
  //   state = {
  //     list: [],
  //   };

  componentDidMount() {
    console.log(this.props);
    // axios("http://jsonplaceholder.typicode.com/posts").then((response) => {
    //   this.setState({ list: response.data });
    // });
  }

  render() {
    return (
      <div>
        <div>Hello About</div>
        {this.props.posts.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(About);
