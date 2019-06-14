import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: null,
      items: [],
      error: ''
    };
  }

  componentDidMount() {
    console.log('CDM now running');
    axios
      .get('http://localhost:3333/items')
      .then(res => {
        console.log(res);
        this.setState({ items: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  addItem = (e, item) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/items', item)
      .then(res => {
        this.setState({
          items: res.data
        });
        this.props.history.push('/item-list');
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteItem = (e, id) => {
    e.preventDefault();
    console.log('now in deleteItem in App');
    axios
      .delete(`http://localhost:3333/items/${id}`)
      .then(res => {
        console.log('Data is back, now set state and reroute', res.data);
        this.setState({
          items: res.data
        });
        this.props.history.push('/item-list');
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, item) => {
    e.preventDefault();
    this.setState({
      activeItem: item
    });
    this.props.history.push('/item-form');
  };

  updateItem = (e, item) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/items/${item.id}`, item)
      .then(res => {
        this.setState({
          activeItem: null,
          items: res.data
        });
        this.props.history.push('/item-list');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log('rendering App', this.state.items);
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Dustin's Trinkets</h1>
          <div className="nav-links">
            <NavLink to="/item-form">{`${
              this.state.activeItem ? 'Update' : 'Add'
            } Item`}</NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/item-list">Shop</NavLink>
          </div>
        </nav>

        <Route exact path="/" component={Home} />

        <Route
          path="/item-list"
          exact
          render={
            props => <ItemList {...props} items={this.state.items} />
            // same as
            //   <ItemList
            //     history={props.history}
            //     items={this.state.items}
            //     location={props.location}
            //     match={props.match}
            //   />
          }
        />

        <Route
          path="/item-list/:id"
          render={props => (
            <Item
              {...props}
              deleteItem={this.deleteItem}
              items={this.state.items}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />

        <Route
          path="/item-form"
          render={props => (
            <ItemForm
              {...props}
              activeItem={this.state.activeItem}
              addItem={this.addItem}
              updateItem={this.updateItem}
            />
          )}
        />
      </div>
  );
}
export default App;
