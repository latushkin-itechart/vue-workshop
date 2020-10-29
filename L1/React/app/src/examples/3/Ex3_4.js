import React from 'react';

export default class Ex3_4 extends React.Component {

  state = {
    message: 'Hello, my name is <b>Alex!</b>',
  }


  render() {
    return (
      <div>
        <h3>User greeting</h3>
        <p>{this.state.message}</p>
        <hr/>
        <p dangerouslySetInnerHTML={{__html: this.state.message}}></p>
      </div>
    )
  }
}