import React from 'react';

export default class Ex3_3 extends React.Component {

  state = {};

  componentDidMount() {
    const setState = (field, value) => this.setState(() => ({[field]: value}))
    setTimeout(() => {
      setState('x', 'X');
    }, 1000);

    setTimeout(() => {
      setState('y', 'Y');
    }, 2000);

    setTimeout(() => {
      setState('z', 'Z');
    }, 3000);
  }

  render() {
    const {x, y, z} = this.state;
    return (
      <div>
        <p>X: { x }</p>
        <p>Y: { y }</p>
        <p>Z: { z }</p>
      </div>
    )
  }

}