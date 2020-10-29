import React from 'react';

const API_URL = `https://api.coingecko.com/api/v3/exchanges?per_page=100&page=1`;

export default class Ex9_1 extends React.Component {

  state = {
    query: '',
    items: []
  }

  constructor(props) {
    super(props);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(e) {
    this.setState(() => ({query: e.target.value}))
  }

  async componentDidMount() {
    const items = await fetch(API_URL).then((res) => res.json());
    this.setState(() => ({items}))
  }

  render() {
    const {query, items} = this.state;
    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    const itemsLength = filteredItems.length;

    const renderedResults = filteredItems.map((item, index) => (
      <li key={item.id}>
        <h3>[#{index + 1}] <a href={item.url}>{item.name}</a></h3>
        <p>Established in {item.year_established}</p>
      </li>
    ))

    return (
      <div>
        <p><input value={query} onChange={this.handleQueryChange}/></p>
        <p>Totally {itemsLength} found </p>
        <ul>
          {renderedResults}
        </ul>
      </div>
    )
  }
}