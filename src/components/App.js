import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CostForm from './CostForm';
import Header from './Header';
import Result from './Result';
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

  handleSubmit = (result) => {
    this.setState({result: result, submitted: true})
  }

  render() {
    let result = this.state.submitted ? <Result result={this.state.result} /> : ""
    return(
      <main className="container">
        <Header />
        <CostForm handleSubmit={this.handleSubmit} />
        {result}
      </main>
     );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);