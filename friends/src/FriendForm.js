import React from "react";

class FriendsForm extends React.Component {
  state = {
    friends: this.props.activeFriends || {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.activeFriends &&
      prevProps.activeFriends !== this.props.activeFriends
    ) {
      this.setState({
        friends: this.props.activeFriends
      });
    }
  }

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "price") {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friends: {
        ...prevState.friends,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    if (this.props.activeFriends) {
      this.props.updatefriends(e, this.state.friends);
    } else {
      this.props.addfriends(e, this.state.friends);
    }
    this.setState({
      friends: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <div>
        <h2>{`${this.props.activeFriends ? "Update" : "Add New"} friends`}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.friends.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.friends.age}
          />
          <div className="baseline" />

          <input
            type="string"
            name="email"
            onChange={this.changeHandler}
            placeholder="Email"
            value={this.state.friends.email}
          />
          <div className="baseline" />

          <button>{`${
            this.props.activefriends ? "Update" : "Add New"
          } friends`}</button>
        </form>
      </div>
    );
  }
}

export default FriendsForm;
