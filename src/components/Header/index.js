import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return(
      <div className="card card-body header">
        <h1 className="card-title">Meeting Cost Calculator</h1>
        <p>
          This calculator calculates the cost of a Department of Defense event based on the
          lenght ot the event and the ranks of the attendees. This calculator only includes
          the attendee's base pay, but future versions will include other allowances.
        </p>
      </div>
    )
  }
}