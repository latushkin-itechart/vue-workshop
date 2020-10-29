import React from 'react';

export default class Ex7_1 extends React.Component {

  state = {
    bindedStyles: {
      color: '#572485',
      fontSize: '25px',
      boxSizing: 'border-box',
    },
    source1: {
      color: 'orange'
    },
    source2: {
      fontSize: '2rem'
    }
  }


  componentDidMount() {
    setInterval(() => {
      const x = Math.round(Math.random() * 4)
      const color = ['red', 'yellow', 'green', '#883925', '#184955'][x];
      this.setState(({bindedStyles}) => ({
        bindedStyles: {
          ...bindedStyles,
          color
        }
      }))
    }, 1000)
  }


  render() {
    const {bindedStyles, source1, source2} = this.state;
    return (
      <div>
        <p style={{color: 'red', fontSize: '20px'}}>Red text with 20px font size</p>
        <p style={bindedStyles}>Programmatically set styles</p>
        <p style={{color: 'green'}}>Mixed styles application DOESN't allowed</p>
        <p style={{...source1, ...source2}}>Merged styles from several sources</p>
      </div>
    )
  }


}