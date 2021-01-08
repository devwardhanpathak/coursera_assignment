import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  };

  render() {
    return (
      <>
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">Dev Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </>
    );
  }
}

export default App;
