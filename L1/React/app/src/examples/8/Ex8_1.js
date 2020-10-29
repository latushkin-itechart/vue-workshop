import React from 'react';

export default class Ex8_1 extends React.Component {

  state = {
    searchQuery: '',
    ping: '',
    singleCheckbox: false,
    country: 'BY'
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    this.setState(() => ({[key]: value}))
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(({searchQuery}) => ({
        searchQuery: searchQuery.length ? searchQuery.slice(0, searchQuery.length - 1) : ''
      }))
    }, 500)
  }


  render() {
    const {searchQuery, ping, singleCheckbox, country} = this.state;
    const onChange = ({target}, key) => {
      this.handleChange(key, target.value)
    }
    const pingInput = ({target}) => {
      console.log('Input ping! ' + target.value);
      this.handleChange('ping', target.value)
    }

    return (
      <div>
        <p>
          <input
            type="text"
            onChange={(e) => onChange(e, 'searchQuery')}
            value={searchQuery}/> Entered {searchQuery.length} symbols
        </p>
        <p>
          <input
            type="checkbox"
            onChange={({target}) => this.handleChange('singleCheckbox', target.checked)}
            value={singleCheckbox}
          /> {String(singleCheckbox)}
        </p>
        <hr/>
        <div>
          <p>
            <input
              type="radio" name="country" value="UK"
              onChange={(e) => onChange(e, 'country')}
              checked={country === 'UK'}/> UK </p>
          <p>
            <input
              type="radio" name="country" value="US"
              onChange={(e) => onChange(e, 'country')}
              checked={country === 'US'}/> US </p>
          <p>
            <input
              type="radio" name="country" value="HU"
              onChange={(e) => onChange(e, 'country')}
              checked={country === 'HU'}/> HU </p>
          <p>
            <input
              type="radio" name="country" value="BY"
              onChange={(e) => onChange(e, 'country')}
              checked={country === 'BY'}/> BY </p>
          <p>Selected: {country}</p>
        </div>
        <p>
          <input type="text" onChange={pingInput} value={ping}/> Enter symbols and see console
      </p>
      </div>
    )
  }
}