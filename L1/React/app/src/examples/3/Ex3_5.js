import React from 'react';

export default class Ex3_5 extends React.Component {

  state = {
    align: 'center',
    reactiveAlign: 'center',
    reactiveAttrName: 'data-0'
  }


  componentDidMount() {
    setInterval(() => {
      const x = Math.round(Math.random() * 2);
      const reactiveAlign = ['left', 'right', 'center'][x];
      this.setState(() => ({reactiveAlign}));
    }, 300)

    setInterval(() => {
      const reactiveAttrName = `data-${Math.round(Math.random() * 10 ** 5 + 10 ** 6)}`;
      this.setState(() => ({reactiveAttrName}));
    }, 300)
  }

  render() {
    const {align, reactiveAlign, reactiveAttrName} = this.state;
    return (
      <div>
        <p align="center">Lorem ipsum dolor sit amet consequetur</p>
        <p align={'right'}>Lorem ipsum dolor sit amet consequetur</p>
        <p align={align}>Lorem ipsum dolor sit amet consequetur</p>
        <hr/>
        <p align={reactiveAlign}>Lorem ipsum dolor sit amet consequetur</p>
        <hr/>
        <p {...{[reactiveAttrName]: align}}>A paragraph with reactive attribute name</p>
      </div>
    )
  }

}