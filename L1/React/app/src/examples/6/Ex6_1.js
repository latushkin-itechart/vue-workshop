import React from 'react';

export default class Ex6_1 extends React.Component {

  state = {
    display: true,
  }

  constructor(props) {
    super(props);
    this.revertDisplay = this.revertDisplay.bind(this);
  }

  revertDisplay() {
    this.setState(({display}) => ({display: !display}));
  }

  render() {
    const {display} = this.state;

    return (
      <div>
        <button onClick={this.revertDisplay}>
          {display ? <span>Hide </span> : <span>Show </span>}
          horizontal rule
        </button>
        {display ? <hr/> : null}
      </div>
    )
  }

}