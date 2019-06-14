import React from "react";

function Friends({ friendss, match, deletefriends, setUpdateForm }) {
  const { id } = match.params;

  const friends = friendss.find(thing => `${thing.id}` === id);
  console.log("rendering friends: ", friendss, friends);
  if (!friends) {
    return <h3>Loading friendss...</h3>;
  }
  return (
    <div>
      <div>
        <h2>{friends.name}</h2>
        <h4>{friends.age}</h4>
        <h4>{friends.email}</h4>
      </div>

      <button
        onClick={e => {
          console.log("Hitting delete button - onClick handler");
          deleteFriends(e, friends.id);
        }}
      >
        Delete Friends
      </button>
      <button onClick={e => setUpdateForm(e, friends)} className="md-button">
        Update Friends
      </button>
    </div>
  );
}

export default Friends;
