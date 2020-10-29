import React from 'react';

export default class Ex3_2 extends React.Component {

  interval = null;

  state = {
    name: 'John',
    items: [1, 2, 3, 4],
    createdAt: new Date(),
    user: {
      name: 'Alex',
      age: 15
    },
    counter: 0,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {counter: prevState.counter + 1};
      })
    }, 500)
  }


  render() {
    const state = this.state;
    return (
      <div>
        <p>Name: {state.name}</p>
        <p>Items: {JSON.stringify(state.items)}. First is {state.items[0]}. Length is {state.items.length}</p>
        <p>User was created at {JSON.stringify(state.createdAt)}. It was in {state.createdAt.getFullYear()}</p>
        <p>User object is {JSON.stringify(state.user)}. This user is {state.user.age} years old.</p>
        <hr/>
        <p>Count is {state.counter}</p>
      </div>
    )
  }

}
