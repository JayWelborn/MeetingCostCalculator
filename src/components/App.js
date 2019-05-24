import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import NavBar from './NavBar'
import Routes from './Routes'
import '../styles/App.scss';


if (module.hot) {
  module.hot.accept();
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: 0,
      submitted: false
    }
  }

  render() {
    return(
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
     );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);