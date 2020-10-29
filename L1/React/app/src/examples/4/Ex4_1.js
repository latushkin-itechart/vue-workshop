import React from 'react';

export default class Ex4_1 extends React.Component {

  state = {
    counter: 0
  }


  getRandomValue() {
    return Math.ceil(Math.random() * 5);
  }

  updateCounter() {
    this.setState(({counter}) => ({counter: counter + this.getRandomValue()}))
  }


  componentDidMount() {
    window.setInterval(() => this.updateCounter(), 500);
  }

  render() {
    return (
      <div>
        <p>Count is {this.state.counter}</p>
      </div>
    )
  }

}