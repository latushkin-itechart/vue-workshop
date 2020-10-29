import React from 'react';
import './ex7_2.css';

export default class Ex7_2 extends React.Component {

  state = {
    isFilled: false,
    isEnabled: true,
  }

  render() {
    const {isFilled, isEnabled} = this.state;
    const toggleFilled = () => {
      this.setState(({isFilled}) => ({isFilled: !isFilled}))
    }
    const toggleEnabled = () => {
      this.setState(({isEnabled}) => ({isEnabled: !isEnabled}))
    }

    // OR via classnames NPM package
    const classes = (items) =>
      (Array.isArray(items) ? items : Object.entries(items).reduce((acc, [name, value]) => [...acc, ...(value ? [name] : [])], [])).join(' ')


    return (
      <div className="ex7_2">
        <p className={classes(['big', 'underline', 'red'])}>Text with binded classes</p>
        <p className={classes({underline: true, big: false, filled: isFilled})} onClick={toggleFilled}>Click me to toggle fill!</p>
        <p className={isEnabled ? 'green' : 'red'} onClick={toggleEnabled}>{isEnabled ? 'ON' : 'OFF'}. Click to toggle</p>
      </div>
    )
  }
}