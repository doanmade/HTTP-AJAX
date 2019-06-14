import React from "react";
import { Link } from "react-router-dom";

function FriendsList(props) {
  if (props.friends.length === 0) {
    return <h3>Loading friends...</h3>;
  }
  return (
    <div>
      {props.friends.map(friends => (
        <Link to={`/item-list/$friends.id}`} key={friends.id}>
          <div>
            <p>{friends.name}</p>
            <p>{friends.age}</p>
            <p>{friends.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

// class FriendsList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       friends: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/friends")
//       .then(res => {
//         console.log(res);
//         this.setState({ friends: res.data });
//       })
//       .catch(err => console.log(err));
//     // .then(res => res.json())
//     // .then(friends => this.setState({ friends: }))
//     // .catch(err => console.log(er));
//   }
//   render() {
//     return <div>{/* trest */}</div>;
//   }
// }
export default FriendsList;
