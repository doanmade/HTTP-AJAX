import axios from "axios";
import React from "react";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
    // .then(res => res.json())
    // .then(friends => this.setState({ friends: }))
    // .catch(err => console.log(er));
  }
  render() {
    return <div>{/* trest */}</div>;
  }
}
export default FriendsList;
