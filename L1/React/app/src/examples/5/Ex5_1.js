import React from 'react';

export default class Ex5_1 extends React.Component {

  state = {
    numericValue: Math.round(Math.random() * (10 ** 6) + 10 ** 7),
    dateValue: new Date(),
    strValue: 'Lorem ipsum dolor sit amet'
  }


  dollars(val) {
    const formatter = new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'USD'
    })
    return formatter.format(val)
  }

  withWeekday(date) {
    const formatter = new Intl.DateTimeFormat('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    return formatter.format(date);
  }

  uppercase(value) {
    return String(value).toUpperCase()
  }

  render() {
    const {numericValue, dateValue, strValue} = this.state;
    return (
      <div>
        <p>Number formatted: {this.dollars(numericValue * 2)}</p>
        <p>Date value: {this.withWeekday(dateValue)}</p>
        <p>String value: {this.uppercase(strValue)}</p>
      </div>
    )
  }

}