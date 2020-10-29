import React from 'react';

export default class Ex4_2 extends React.Component {

  state = {
    clickCount: 0,
    onceTriggered: false,
  }

  constructor(props) {
    super(props);
    this.onElementClick = this.onElementClick.bind(this)
  }

  onElementClick(ev, data = null) {
    this.setState(({clickCount}) => ({clickCount: clickCount + 1}));
    console.log(ev, data);
  }

  render() {
    const triggerOnce = (...args) => {
      this.onElementClick(...args);
      this.setState(() => ({onceTriggered: true}))
    }

    return (
      <div>
        <p>Click count: {this.state.clickCount}</p>
        <hr/>
        <p>
          <button onClick={this.onElementClick}>Click me!</button>
        </p>
        <p>
          <button onClick={() => this.onElementClick()}>Click me!</button>
        </p>
        <p>
          <button onClick={(event) => this.onElementClick(event)}>Click me!</button>
        </p>
        <p>
          <button onClick={(event) => this.onElementClick(event, {x: 1})}>Click me!</button>
        </p>

        <hr/>

        <p>
          <button
            onClick={this.state.onceTriggered ? void 0 : triggerOnce}>Click will work only once
          </button>
        </p>
        <p onClick={this.onElementClick}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              this.onElementClick(null, null)
            }}>
            Click will stop propagation
          </button>
        </p>
        <p>
          <a href="//google.com"
             onClick={(e) => {
               e.preventDefault();
               this.onElementClick(null)
             }}>Click me!</a>
        </p>
        <p onClick={this.onElementClick}>
          <button
            onClick={(e) => e.stopPropagation()}
          >
            Void stop propagation handler
          </button>
        </p>
      </div>
    )
  }
}