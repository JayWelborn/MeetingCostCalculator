import React, {Component} from 'react';

export default class Header extends Component {
constructor(props) {
  super(props);
}

  render() {
    return(
      <section className="card card-body">
        <h3 className="card-title">Total Cost: </h3>
        <p>${this.props.result}</p>
      </section>
    )
  }
}