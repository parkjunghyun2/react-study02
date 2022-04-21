import React from 'react';
import './App.css';

class App5 extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  minus = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>번호 : {this.state.count}</h1>
        <button onClick={this.add}> + </button>
        <button onClick={this.minus}> - </button>
      </div>
    );
  }
}

export default App5;
