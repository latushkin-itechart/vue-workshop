import React from 'react';

const API_URL = `https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1`;
export default class Ex6_2 extends React.Component {

  state = {
    items: [],
  }

  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((items) => {
        this.setState(() => ({items}))
      })
  }

  selectItem(item) {
    window.alert(`${item.name} selected!`);
  }

  removeItem(item) {
    this.setState(({items}) => ({
      items: items.filter((x) => x !== item)
    }))
  }

  render() {

    const numericList = new Array(5).fill(0).map((_, i) => (
      <li key={i}>Item # <b>{i}</b></li>
    ));

    const exchangeList = this.state.items.map((item, index) => (
      <li key={item.id}>
        <h3>[#{index + 1}] <a href={item.url}>{item.name}</a></h3>
        <p>Established in {item.year_established}</p>
        <p>
          <button onClick={() => this.selectItem(item)}>Select item</button>
          <button onClick={() => this.removeItem(item)}>Remove item</button>
        </p>
      </li>
    ))

    return (
      <div>
        <ul>
          {numericList}
        </ul>
        <hr/>
        <ul>
          {exchangeList}
        </ul>
      </div>
    )
  }
}