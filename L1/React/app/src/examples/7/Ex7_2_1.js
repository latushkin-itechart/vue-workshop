import React from 'react';
import styles from './ex7_2_1.css';

export default class Ex7_2_1 extends React.Component {

  state = {
    isFilled: false,
    isEnabled: true,
  }

  render() {
    console.log(styles);
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


    // Not working, connection wasn't executed, just demo code.
    return (
      <div className="ex7_2_1">
        <p className={styles.big}>Style modules</p>
        <p className={classes([styles.big, styles.underline, styles.red])}>Text with binded classes</p>
        <p className={classes({[styles.underline]: true, [styles.big]: false, [styles.filled]: isFilled})} onClick={toggleFilled}>Click me to toggle fill!</p>
        <p className={isEnabled ? styles.green : styles.red} onClick={toggleEnabled}>{isEnabled ? 'ON' : 'OFF'}. Click to toggle</p>
      </div>
    )
  }
}